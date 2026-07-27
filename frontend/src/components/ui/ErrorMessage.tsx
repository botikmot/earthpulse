type ErrorMessageProps = {
    message: string;
    className?: string;
};

export function ErrorMessage({
    message,
    //className
}: ErrorMessageProps) {
    return (
        <div
            className="
                rounded-lg
                border
                border-red-300
                bg-red-50
                p-4
                text-red-700 
            "
        >
            {message}
        </div>
    )
}