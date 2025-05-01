import React from "react";

function Button({
    children,
    onClick,
    icon = null,
    disabled = false,
    className = "",
    variant = "primary",
    size = "md",
    ...props
}) {

    const buttonSizes = {
        sm: "text-sm px-3 py-1",
        md: "text-base px-4 py-2",
        lg: "text-lg px-5 py-3",
    };
    const buttonVariants = {
        outlined: "bg-white text-black hover:bg-gray-400 border-2",
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-300 text-black hover:bg-gray-400",
        danger: "bg-red-500 text-white hover:bg-red-600",
    };
    const disabledClass = "opacity-50 cursor-not-allowed";

    return (
        <button
            onClick={onClick}
            className={`
                inline-flex items-center justify-center gap-2 rounded font-semibold transition duration-200 ease-in-out
                focus:outline-none focus:ring
                ${buttonSizes[size]} ${buttonVariants[variant]} ${disabledClass ? disabledClass : ""}
                ${className}
            `}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;