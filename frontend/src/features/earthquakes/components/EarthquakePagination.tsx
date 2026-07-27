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

        <div className="mt-6 flex items-center justify-between">

            <p className="text-sm text-muted-foreground">

                Showing

                <span className="mx-1 font-semibold">

                    {start}-{end}

                </span>

                of

                <span className="mx-1 font-semibold">

                    {totalItems}

                </span>

                earthquakes

            </p>

            <div className="flex items-center gap-3">

                <Button
                    variant="outline"
                    size="sm"
                    disabled={currentPage === 1}
                    onClick={() =>
                        onPageChange(currentPage - 1)
                    }
                >
                    Previous
                </Button>

                <span className="text-sm font-medium">

                    Page {currentPage} of {totalPages}

                </span>

                <Button
                    variant="outline"
                    size="sm"
                    disabled={currentPage === totalPages}
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