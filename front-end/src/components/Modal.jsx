import React, { useState } from 'react';

const Modal = ({ closeModal }) => {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implemente a lógica para lidar com o envio do formulário
        console.log('Título:', title);
        console.log('URL:', url);
        // Aqui você pode adicionar a lógica para enviar os dados para onde for necessário
        // e, em seguida, fechar o modal
        closeModal();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">Adicionar</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-600">
                            Título:
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-2 border rounded focus:outline-none"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="url" className="block text-sm font-medium text-gray-600">
                            URL:
                        </label>
                        <input
                            type="url"
                            id="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="w-full p-2 border rounded focus:outline-none"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="block w-full mt-8 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded focus:outline-none"
                    >
                        Adicionar
                    </button>
                </form>
                <button
                    onClick={closeModal}
                    className="block w-full mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none"
                >
                    Cancelar
                </button>
            </div>
        </div>
    );
};

export default Modal;
