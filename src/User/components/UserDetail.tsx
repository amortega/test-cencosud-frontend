import { User } from '../interfaces/user.model';

function UserDetail(props: User) {
    return (
        <tr key={props.id} className="bg-white border-b hover:bg-gray-50">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{props.id}</th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{props?.full_name}</th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{props?.email}</th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{props?.city}</th>
        </tr>
    );
}

export {
    UserDetail
} 