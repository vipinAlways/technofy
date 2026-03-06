import Link from "next/link";

type Props = {
  page: number;
  totalPages: number;
};

export default function Pagination({ page, totalPages }: Props) {
  const start = Math.floor((page - 1) / 6) * 7;
  const end = Math.min(start + 5, totalPages);
  return (
    <div className="flex gap-3 mt-10 mx-auto   justify-center ">
      {page > 1 ? (
        <Link
          href={`/blog?page=${page - 1}`}
          className="px-4 py-2 border rounded"
        >
          Prev
        </Link>
      ) : (
        <span className="px-4 py-2 border rounded opacity-50 cursor-not-allowed">
          Prev
        </span>
      )}

      {Array.from({ length: end - start  }).map((_, i) => {
        const p = i + 1;

        return (
          <Link
            key={p}
            href={`/blog?page=${p}`}
            className={`px-4 py-2 border rounded ${
              p === page ? "bg-accent text-white" : ""
            }`}
          >
            {p}
          </Link>
        );
      })}

      {page < totalPages ? (
        <Link
          href={`/blog?page=${page - 1}`}
          className="px-4 py-2 border rounded"
        >
          Next
        </Link>
      ) : (
        <span className="px-4 py-2 border rounded opacity-50 cursor-not-allowed">
          Next
        </span>
      )}
    </div>
  );
}
