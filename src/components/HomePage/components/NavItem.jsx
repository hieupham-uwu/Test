import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function NavItem({ title, content, icon, link }) {
    return (
        <Link to={link}>
            <div className="group mx-3 flex cursor-pointer rounded-lg px-3 py-5 hover:bg-[#f1f5f9]">
                <div className=" mx-3 flex size-10 rounded-md bg-gray-50">
                    <FontAwesomeIcon className="m-auto flex text-center group-hover:text-indigo-600" icon={icon} />
                </div>
                <div className="px-4 text-left text-sm">
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                    <h4 className="text-xs font-light text-gray-600">{content} </h4>
                </div>
            </div>
        </Link>
    );
}

export default NavItem;
