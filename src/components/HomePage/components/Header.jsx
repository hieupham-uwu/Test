import {
    faArrowPointer,
    faArrowRight,
    faArrowsRotate,
    faChartPie,
    faChevronDown,
    faCirclePlay,
    faEnvelope,
    faFingerprint,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import NavItem from './NavItem';
import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
    const [isHidden, setIsHidden] = React.useState(true);
    const navItemStyle = clsx('text-center text-sm font-semibold leading-8 cursor-pointer');
    const productStyle = clsx(
        'absolute right-32 pt-3 top-12 w-[28rem] flex-col rounded-3xl border bg-white shadow-md transition-all',
        {
            hidden: isHidden,
        },
    );
    const handleProduct = () => {
        setIsHidden((pre) => !pre);
    };
    return (
        <header className="grid select-none grid-cols-10 gap-4 bg-white p-4 shadow-sm">
            <div className="col-span-3">
                <Link to="/">
                    <img
                        className="size-9"
                        src="https://img.freepik.com/premium-vector/free-vector-beautiful-flying-hummingbird-design-element-banners-posters-leaflets-brochur_1009653-1.jpg"
                        alt="logo"
                    />
                </Link>
            </div>
            <div className="relative col-span-4 grid grid-cols-4 gap-4">
                <div className={navItemStyle} onClick={handleProduct}>
                    Product
                    <FontAwesomeIcon className="pl-3 text-slate-400" icon={faChevronDown} />{' '}
                    <nav className={isHidden ? productStyle : `${productStyle} flex`}>
                        <NavItem
                            title="Analytics"
                            content="Get a better understanding of your traffic"
                            icon={faChartPie}
                        />
                        <NavItem title="Engagement" content="Speak directly to your customers" icon={faArrowPointer} />
                        <NavItem
                            link="/calculator/"
                            title="Security"
                            content="Your customers’ data will be safe and secure"
                            icon={faFingerprint}
                        />
                        <NavItem title="Integrations" content="Connect with third-party tools" icon={faEnvelope} />
                        <NavItem
                            title="Automations"
                            content="Build strategic funnels that will convert"
                            icon={faArrowsRotate}
                        />
                        <div className=" mt-3 grid cursor-pointer grid-cols-2 divide-x divide-gray-900/5 rounded-b-2xl bg-gray-50">
                            <div className=" p-2 text-gray-900 hover:rounded-bl-2xl hover:bg-gray-100">
                                <FontAwesomeIcon className="mr-2" icon={faCirclePlay} />
                                Watch Demo
                            </div>
                            <div className=" p-2 text-gray-900 hover:rounded-br-2xl hover:bg-gray-100">
                                <FontAwesomeIcon className="mr-2" icon={faPhone} />
                                Contact Sales
                            </div>
                        </div>
                    </nav>
                </div>
                <div className={navItemStyle}>Features</div>
                <div className={navItemStyle}>Marketplace</div>
                <div className={navItemStyle}>Company</div>
            </div>
            <div className="col-start-10 text-center text-sm font-semibold leading-8">
                <Link to="/login">
                    Login
                    <FontAwesomeIcon className="pl-3" icon={faArrowRight} />{' '}
                </Link>
            </div>
        </header>
    );
}

export default Header;
