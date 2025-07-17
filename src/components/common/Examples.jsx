import { useState, useEffect, useRef } from 'react';

export default function Examples() {
    const [currentPage, setCurrentPage] = useState('home');
    const [showRightSidebar, setShowRightSidebar] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);

    // Cerrar modal con tecla ESC
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') setShowModal(false);
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, []);

    // Cerrar modal al hacer clic fuera
    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setShowModal(false);
        }
    };

    const renderContent = () => {
        switch (currentPage) {
            case 'home':
                return (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Inicio</h2>
                        <p>Contenido principal de la página de inicio.</p>
                        <button
                            onClick={() => setShowRightSidebar(true)}
                            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            Abrir Sidebar Derecho
                        </button>
                    </div>
                );
            case 'about':
                return (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Acerca de</h2>
                        <p>Esta es la página informativa "Acerca de".</p>
                    </div>
                );
            default:
                return <p className="text-red-600">Página no encontrada</p>;
        }
    };

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar Izquierdo */}
            <aside className="w-64 bg-gray-800 text-white p-4 flex-shrink-0">
                <h2 className="text-xl font-bold mb-4">Menú</h2>
                <nav className="space-y-2">
                    <button
                        onClick={() => setCurrentPage('home')}
                        className={`block w-full text-left px-3 py-2 rounded hover:bg-gray-700 ${currentPage === 'home' ? 'bg-gray-700' : ''
                            }`}
                    >
                        Inicio
                    </button>
                    <button
                        onClick={() => setCurrentPage('about')}
                        className={`block w-full text-left px-3 py-2 rounded hover:bg-gray-700 ${currentPage === 'about' ? 'bg-gray-700' : ''
                            }`}
                    >
                        Acerca de
                    </button>
                </nav>
            </aside>

            {/* Contenedor principal */}
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <header className="sticky top-0 z-30 bg-white shadow p-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold">Mi Aplicación</h1>
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-black text-white px-3 py-1 rounded"
                    >
                        Abrir Modal
                    </button>
                </header>

                {/* Contenido con scroll */}
                <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
                    {renderContent()}
                </main>
            </div>

            {/* Sidebar Derecho */}
            {showRightSidebar && (
                <aside className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg z-40 p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold">Sidebar Derecho</h2>
                        <button onClick={() => setShowRightSidebar(false)}>✕</button>
                    </div>
                    <p>Contenido adicional del panel derecho.</p>
                </aside>
            )}

            {/* Modal */}
            {showModal && (
                <div
                    onClick={handleClickOutside}
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                >
                    <div
                        ref={modalRef}
                        className="bg-white p-6 rounded-lg max-w-md w-full shadow-xl"
                    >
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold">Modal</h2>
                            <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-black">✕</button>
                        </div>
                        <p className="mt-4 text-gray-700">
                            Este modal se cierra al presionar <kbd>ESC</kbd> o hacer clic fuera.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
