import React from 'react'

export default function Input(props) {
    return (
        <div>
            <input
                name={props.name}
                onChange={props.handelChang}
                placeholder={props.placeholder}
                type="text"
                className="bg-gray-50 border border-blue-600 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" />
        </div>
    )
}
