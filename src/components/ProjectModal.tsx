import { X } from "lucide-react";
import { useEffect } from "react";

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
    projectTitle: string;
}

const ProjectModal = ({ isOpen, onClose, images, projectTitle }: ProjectModalProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            window.addEventListener("keydown", handleEscape);
        }
        return () => window.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-5xl bg-white rounded-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border bg-card flex-shrink-0">
                    <h3 className="text-xl font-semibold text-primary">{projectTitle}</h3>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-secondary rounded-full transition-colors"
                        aria-label="Close modal"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Vertical Scrollable Image Gallery */}
                <div className="overflow-y-auto bg-muted/30">
                    <div className="flex flex-col gap-6 p-6">
                        {images.map((img, idx) => (
                            <div key={idx} className="relative bg-white rounded-lg shadow-md overflow-hidden">
                                <img
                                    src={img}
                                    alt={`${projectTitle} screenshot ${idx + 1}`}
                                    className="w-full h-auto object-contain"
                                />
                                <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1.5 rounded-full text-xs font-medium">
                                    {idx + 1} / {images.length}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
