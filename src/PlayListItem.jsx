import Image from "next/image";

export default function PlayListItem({
    title = "Untitled",
    subtitle = "",
    duration = "",
    thumbnailSrc = "",
    isActive = false,
    onClick,
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={[
                "w-full flex items-center gap-3 p-3 rounded-md text-left",
                "hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                isActive ? "bg-gray-100" : "bg-transparent",
            ].join(" ")}
            aria-current={isActive ? "true" : undefined}
        >
            <div className="relative h-12 w-12 overflow-hidden rounded-md bg-gray-200 shrink-0">
                {thumbnailSrc ? (
                    <Image
                        src={thumbnailSrc}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="48px"
                    />
                ) : null}
            </div>

            <div className="min-w-0 flex-1">
                <div className="truncate font-medium">{title}</div>
                {subtitle ? (
                    <div className="truncate text-sm text-gray-600">{subtitle}</div>
                ) : null}
            </div>

            {duration ? (
                <div className="shrink-0 text-sm text-gray-600 tabular-nums">
                    {duration}
                </div>
            ) : null}
        </button>
    );
}