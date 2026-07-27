
type LoadingProps = {
    text?: string;
    className?: string;
}

export function Loading({
    text = "Loading...",
    className="h-[400px]",
}: LoadingProps) {
    
    return (
        <div className={`flex flex-col items-center justify-center ${className}`}>
            <div className="animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-blue-600 mb-3" />
            <p>{text}</p>
        </div>
    );
}