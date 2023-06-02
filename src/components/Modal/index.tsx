import React, {ReactNode, useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import {getFocusableElements, nextFocus, usePortal} from "../../utils/utils";

const Modal: React.FC<{
    closeOnClickOutside?: boolean;
    closeOnEsc?: boolean;
    onClose: () => void;
    open?: boolean;
    className?: string;
    children: ReactNode
}> & { Head: React.FC<{ children: ReactNode, className?: string }> } & {
    Body: React.FC<{ children: ReactNode, className?: string }>
} = ({
         children,
         closeOnClickOutside = true,
         closeOnEsc = true,
         onClose,
         open = true,
         className
     }) => {
    const portal = usePortal();
    const previousFocus = useRef<HTMLElement | null>(null);

    // close on click outside
    const container = useRef<HTMLDivElement>(null);
    const onOverlayClick = (e: React.MouseEvent) => {
        if (!container.current?.contains(e.target as Node)) onClose();
    };

    // close on esc
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (!open) return;

            switch (e.key) {
                case "Escape": {
                    if (closeOnEsc) onClose();
                    break;
                }
                case "Tab": {
                    e.preventDefault();
                    nextFocus(getFocusableElements(container.current), !e.shiftKey);
                    break;
                }
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [closeOnEsc, onClose, open]);

    useEffect(() => {
        // aria-hidden
        document.getElementById("root")?.setAttribute("aria-hidden", open.toString());
        portal.current?.setAttribute("aria-hidden", (!open).toString());

        if (open) {
            previousFocus.current = (document.activeElement as HTMLElement) ?? null;
            nextFocus(getFocusableElements(container.current));
        } else {
            previousFocus.current?.focus?.();
            previousFocus.current = null;
        }
    }, [open, portal]); // note: when importing, eslint doesn't recognise that portal is a ref, so it doesn't need to be in the deps array

    return ReactDOM.createPortal(
        // transparent overlay: `inset-0` to stretch over the entire screen (combines`top-0`, `right-0`, `bottom-0`, and `left-0`)
        <div
            className={"fixed inset-0 z-[50] p-8 bg-white" + `${open ? "visible" : "invisible"}` + className // control visibility via `open` attribute (or render conditionally)
            }
            onClick={closeOnClickOutside ? onOverlayClick : undefined}
        >
            {/* container: `max-w-sm` to make it reasonably narrow, `mx-auto` to center horizontally */}
            <div className="relative w-full max-w-sm mx-auto mt-8" ref={container}>
                {/* contents */}
                <div className="overflow-hidden bg-gray-800 rounded shadow-xl">{children}</div>
                {/* closer in the corner */}
                <button
                    className="absolute -top-2 -right-2 flex justify-center rounded-full h-8 w-8 bg-neutral-800 cursor-pointer shadow-xl outline-none border-2 border-gray-600 focus:border-blue-300"
                    onClick={() => onClose()}
                    title="Bye bye 👋"
                >
                    <span className="text-white text-2xl leading-6 select-none">&times;</span>
                </button>
            </div>
        </div>,
        portal.current
    );
};

const Head: React.FC<{ children: ReactNode, className?: string }> = ({children, className}) => (
    <div className={"block px-4 py-2 " + className}>
        <h1 className="text-lg">{children}</h1>
    </div>
);

const Body: React.FC<{ children: ReactNode, className?: string }> = ({children, className}) => <div
    className={"p-4 " + className}>{children}</div>;
Modal.Head = Head
Modal.Body = Body
export default Modal;
