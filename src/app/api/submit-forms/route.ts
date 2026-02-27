import { NextResponse } from "next/server";
import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { format } from "date-fns";

// Initialize Google Service Account JWT
const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env?.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"), // Fix for multi-line keys
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const doc = new GoogleSpreadsheet(
  process.env.SPREADSHEET_ID!, // Replace with your sheet ID
  serviceAccountAuth,
);

async function submitToSheet(data: Record<string, any>) {
  try {
    let existed = false;
    await doc.loadInfo();

    const sheet = doc.sheetsByTitle["technofy"];
    if (!sheet) throw new Error("technofy not found");

    // Load existing headers
    await sheet.loadHeaderRow();

    const existingHeaders = sheet.headerValues || [];

    // Find missing headers from data
    const newHeaders = Object.keys(data).filter(
      (key) =>
        data[key] != null && data[key] !== "" && !existingHeaders.includes(key),
    );

    // If new fields exist → extend header row
    if (newHeaders.length) {
      await sheet.setHeaderRow([...existingHeaders, ...newHeaders]);
    }

    // Now safe to work with rows
    const rows = await sheet.getRows();

    const existingRow = rows.find(
      (row) =>
        row.get("sessionId") === data.sessionId &&
        row.get("formId") === data.formId,
    );

    if (existingRow) {
      const oldPhone = existingRow?.get("phone")?.toString().trim();
      const newPhone = data.phone?.toString().trim();

      existed = Boolean(oldPhone && oldPhone === newPhone);
      Object.entries(data).forEach(([key, value]) => {
        existingRow.set(key, value);
      });
      await existingRow.save();
    } else {
      await sheet.addRow(data);
    }

    return { existed };
  } catch (error) {
    console.error(error);
    throw new Error("Error while sending to Google Sheets");
  }
}

export async function POST(req: any) {
  try {
    const ip = (req.headers.get("x-forwarded-for") ?? "127.0.0.1").split(
      ",",
    )[0];

    // Use an IP Geolocation API (e.g., ipapi.co)
    let country, region;
    try {
      const r = await fetch(`http://ip-api.com/json/${ip}`);
      const d = await r.json();
      country = d.country;
      region = d.regionName;
    } catch (e) {}

    const data = await req.json();

    const dataToSend = {
      ...data,
      ipLocation: region + ", " + country,
      createdAt: format(
        new Date(
          new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
        ),
        "dd,LLL yyyy hh:mm aa",
      ),
    };

    // Send Data
    await submitToSheet(dataToSend);

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error(error);
    return new Response(error.message, { status: 500 });
  }
}
