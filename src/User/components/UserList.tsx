import { UserListProps } from '../interfaces/user.model';

function UserList(props: UserListProps) {
    return (
        <div className='container mx-auto'>
            <h3 className="mb-10 mt-10 font-bold text-gray-500 md:text-2xl lg:text-4xl">
                Listado de usuarios
            </h3>
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">ID</th>
                        <th scope="col" className="px-6 py-3">Nombre completo</th>
                        <th scope="col" className="px-6 py-3">Email</th>
                        <th scope="col" className="px-6 py-3">Ciudad</th>
                    </tr>
                </thead>
                <tbody>
                    { props.error && 
                        <tr className="bg-white border-b hover:bg-gray-50">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Ha ocurrido un error, intente de nuevo.
                            </th> 
                        </tr>
                    }
                    { props.loading && 
                        <tr className="bg-white border-b hover:bg-gray-50">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Loading...
                            </th>
                        </tr>
                    }
                    {props.children}
                </tbody>
            </table>
        </div>
    );
}

export {
    UserList
};