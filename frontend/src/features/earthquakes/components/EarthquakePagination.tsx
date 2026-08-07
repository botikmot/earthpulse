import { Button } from "@/components/ui/button";

type EarthquakePaginationProps = {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    pageSize: number;
    onPageChange: (page: number) => void;
};

export function EarthquakePagination({
    currentPage,
    totalPages,
    totalItems,
    pageSize,
    onPageChange,
}: EarthquakePaginationProps) {

    const start =
        totalItems === 0
            ? 0
            : (currentPage - 1) * pageSize + 1;

    const end =
        Math.min(
            currentPage * pageSize,
            totalItems
        );

    return (

        <div
            className="
                mt-6
                flex
                flex-col
                gap-4

                sm:flex-row
                sm:items-center
                sm:justify-between
            "
        >

            {/* Result count */}

            <p
                className="
                    text-center
                    text-xs
                    text-muted-foreground

                    sm:text-left
                    sm:text-sm
                "
            >

                Showing

                <span className="mx-1 font-semibold text-foreground">
                    {start}-{end}
                </span>

                of

                <span className="mx-1 font-semibold text-foreground">
                    {totalItems}
                </span>

                earthquakes

            </p>

            {/* Pagination controls */}

            <div
                className="
                    flex
                    items-center
                    justify-center
                    gap-2

                    sm:gap-3
                "
            >

                <Button
                    variant="outline"
                    size="sm"
                    className="
                        h-8
                        px-2.5
                        text-xs

                        sm:h-9
                        sm:px-3
                        sm:text-sm
                    "
                    disabled={currentPage === 1}
                    onClick={() =>
                        onPageChange(currentPage - 1)
                    }
                >
                    Previous
                </Button>

                <span
                    className="
                        whitespace-nowrap
                        text-xs
                        font-medium

                        sm:text-sm
                    "
                >
                    Page {currentPage} of {totalPages}
                </span>

                <Button
                    variant="outline"
                    size="sm"
                    className="
                        h-8
                        px-2.5
                        text-xs

                        sm:h-9
                        sm:px-3
                        sm:text-sm
                    "
                    disabled={
                        currentPage === totalPages
                    }
                    onClick={() =>
                        onPageChange(currentPage + 1)
                    }
                >
                    Next
                </Button>

            </div>

        </div>

    );
}