import React from 'react'

export default function TodoForm({isOpen, onClose, onAdd}) {
  
    if(isOpen) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
            <div className="bg-white p-6 border-4 shadow-xl w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4">Adicionar Item</h2>
              <input
                type="text"
                placeholder="Digite algo..."
                className="w-full border-3 border-gray-600 px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex justify-end gap-2">
                <button
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300"
                  onClick={onClose}
                >
                  Cancelar
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700"
                  onClick={onAdd}
                >
                  Adicionar
                </button>
              </div>
            </div>
          </div>
      )
    }
    return null
}
