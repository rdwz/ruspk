import { useTable } from 'react-table'
// const data = [
//     { id: 1, arch: "noarch" },
//     { id: 2, arch: "ppc824x" },
//     { id: 3, arch: "ppc854x" },
//     { id: 4, arch: "ppc853x" },
//     { id: 5, arch: "88f628x" },
// ];
export default function Table() {
const data = [
        { col1: "Hello", col2: "World" },
        { col1: "react-table", col2: "rocks" },
        { col1: "whatever", col2: "you want" },
    ];

const columns = [
      { Header: 'Column 1', accessor: 'col1',},
      { Header: 'Column 2', accessor: 'col2',},
      { Header: 'Profile', accessor: 'col3',},
      { Header: 'Tag', accessor: 'col4',},
      { Header: 'Actions', accessor: 'actions',},
    ];

const tableInstance = useTable({ columns, data })

const {
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
} = tableInstance


    return (
        <div className="overflow-x-auto">
            <div className="flex overflow-x-auto">
                <div className="w-full lg:w-5/6">
                    <div className="bg-white shadow-md rounded my-6">
                        <table className="min-w-max w-full table-auto" {...getTableProps()}>
                            <thead>
                                {
                                    headerGroups.map(headerGroup => (
                                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal" {...headerGroup.getHeaderGroupProps()}>
                                            {
                                                headerGroup.headers.map(column => (
                                                    <th className="py-3 px-6 text-left text-center" {...column.getHeaderProps()}>{column.render('Header')}</th>
                                                ))
                                            }
                                        </tr>
                                    ))
                                }
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light" {...getTableBodyProps()}>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    x="0px"
                                                    y="0px"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 48 48"
                                                    style={{ fill: "#000" }}
                                                >
                                                    <path
                                                        fill="#80deea"
                                                        d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
                                                    ></path>
                                                    <path
                                                        fill="#80deea"
                                                        d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
                                                    ></path>
                                                    <path
                                                        fill="#80deea"
                                                        d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
                                                    ></path>
                                                    <circle
                                                        cx="24"
                                                        cy="24"
                                                        r="4"
                                                        fill="#80deea"
                                                    ></circle>
                                                </svg>
                                            </div>
                                            <span className="font-medium">
                                                React Project
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-left">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img
                                                    className="w-6 h-6 rounded-full"
                                                    src="https://randomuser.me/api/portraits/men/1.jpg"
                                                />
                                            </div>
                                            <span>Eshal Rosas</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex items-center justify-center">
                                            <img
                                                className="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125"
                                                src="https://randomuser.me/api/portraits/men/1.jpg"
                                            />
                                            <img
                                                className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                                                src="https://randomuser.me/api/portraits/women/2.jpg"
                                            />
                                            <img
                                                className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                                                src="https://randomuser.me/api/portraits/men/3.jpg"
                                            />
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                                            Active
                                        </span>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex item-center justify-center">
                                            <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img
                                                    className="w-6 h-6"
                                                    src="https://img.icons8.com/color/100/000000/vue-js.png"
                                                />
                                            </div>
                                            <span className="font-medium">
                                                Vue Project
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-left">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img
                                                    className="w-6 h-6 rounded-full"
                                                    src="https://randomuser.me/api/portraits/women/2.jpg"
                                                />
                                            </div>
                                            <span>Anita Rodriquez</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex items-center justify-center">
                                            <img
                                                className="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125"
                                                src="https://randomuser.me/api/portraits/men/1.jpg"
                                            />
                                            <img
                                                className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                                                src="https://randomuser.me/api/portraits/women/2.jpg"
                                            />
                                            <img
                                                className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                                                src="https://randomuser.me/api/portraits/men/3.jpg"
                                            />
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                                            Completed
                                        </span>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex item-center justify-center">
                                            <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img
                                                    className="w-6 h-6"
                                                    src="https://img.icons8.com/color/100/000000/angularjs.png"
                                                />
                                            </div>
                                            <span className="font-medium">
                                                Angular Project
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-left">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img
                                                    className="w-6 h-6 rounded-full"
                                                    src="https://randomuser.me/api/portraits/men/3.jpg"
                                                />
                                            </div>
                                            <span>Taylan Bush</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex items-center justify-center">
                                            <img
                                                className="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125"
                                                src="https://randomuser.me/api/portraits/men/1.jpg"
                                            />
                                            <img
                                                className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                                                src="https://randomuser.me/api/portraits/women/2.jpg"
                                            />
                                            <img
                                                className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                                                src="https://randomuser.me/api/portraits/men/3.jpg"
                                            />
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <span className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">
                                            Scheduled
                                        </span>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex item-center justify-center">
                                            <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img
                                                    className="w-6 h-6"
                                                    src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/laravel-64.png"
                                                />
                                            </div>
                                            <span className="font-medium">
                                                Laravel Project
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-left">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img
                                                    className="w-6 h-6 rounded-full"
                                                    src="https://randomuser.me/api/portraits/men/4.jpg"
                                                />
                                            </div>
                                            <span>Tarik Novak</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex items-center justify-center">
                                            <img
                                                className="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125"
                                                src="https://randomuser.me/api/portraits/men/1.jpg"
                                            />
                                            <img
                                                className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                                                src="https://randomuser.me/api/portraits/women/2.jpg"
                                            />
                                            <img
                                                className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                                                src="https://randomuser.me/api/portraits/men/3.jpg"
                                            />
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
                                            Pending
                                        </span>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex item-center justify-center">
                                            <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img
                                                    className="w-6 h-6"
                                                    src="https://img.icons8.com/color/48/000000/git.png"
                                                />
                                            </div>
                                            <span className="font-medium">
                                                GIT Project
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-left">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img
                                                    className="w-6 h-6 rounded-full"
                                                    src="https://randomuser.me/api/portraits/men/5.jpg"
                                                />
                                            </div>
                                            <span>Oscar Howard</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex items-center justify-center">
                                            <img
                                                className="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125"
                                                src="https://randomuser.me/api/portraits/men/1.jpg"
                                            />
                                            <img
                                                className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                                                src="https://randomuser.me/api/portraits/women/2.jpg"
                                            />
                                            <img
                                                className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                                                src="https://randomuser.me/api/portraits/men/3.jpg"
                                            />
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                                            Active
                                        </span>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex item-center justify-center">
                                            <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img
                                                    className="w-6 h-6"
                                                    src="https://img.icons8.com/color/48/000000/nodejs.png"
                                                />
                                            </div>
                                            <span className="font-medium">
                                                NodeJS Project
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-left">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img
                                                    className="w-6 h-6 rounded-full"
                                                    src="https://randomuser.me/api/portraits/women/6.jpg"
                                                />
                                            </div>
                                            <span>Melisa Moon</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex items-center justify-center">
                                            <img
                                                className="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125"
                                                src="https://randomuser.me/api/portraits/men/1.jpg"
                                            />
                                            <img
                                                className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                                                src="https://randomuser.me/api/portraits/women/2.jpg"
                                            />
                                            <img
                                                className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                                                src="https://randomuser.me/api/portraits/men/3.jpg"
                                            />
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <span className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">
                                            Scheduled
                                        </span>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex item-center justify-center">
                                            <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img
                                                    className="w-6 h-6"
                                                    src="https://img.icons8.com/color/48/000000/javascript.png"
                                                />
                                            </div>
                                            <span className="font-medium">
                                                JavaScript Project
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-left">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img
                                                    className="w-6 h-6 rounded-full"
                                                    src="https://randomuser.me/api/portraits/women/7.jpg"
                                                />
                                            </div>
                                            <span>Cora Key</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex items-center justify-center">
                                            <img
                                                className="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125"
                                                src="https://randomuser.me/api/portraits/men/1.jpg"
                                            />
                                            <img
                                                className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                                                src="https://randomuser.me/api/portraits/women/2.jpg"
                                            />
                                            <img
                                                className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                                                src="https://randomuser.me/api/portraits/men/3.jpg"
                                            />
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
                                            Pending
                                        </span>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex item-center justify-center">
                                            <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img
                                                    className="w-6 h-6"
                                                    src="https://img.icons8.com/color/48/000000/php.png"
                                                />
                                            </div>
                                            <span className="font-medium">
                                                PHP Project
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-left">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img
                                                    className="w-6 h-6 rounded-full"
                                                    src="https://randomuser.me/api/portraits/men/8.jpg"
                                                />
                                            </div>
                                            <span>Kylan Dorsey</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex items-center justify-center">
                                            <img
                                                className="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125"
                                                src="https://randomuser.me/api/portraits/men/1.jpg"
                                            />
                                            <img
                                                className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                                                src="https://randomuser.me/api/portraits/women/2.jpg"
                                            />
                                            <img
                                                className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                                                src="https://randomuser.me/api/portraits/men/3.jpg"
                                            />
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                                            Completed
                                        </span>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex item-center justify-center">
                                            <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
