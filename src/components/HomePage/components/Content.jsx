import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Content() {
    return (
        <div className="container mx-auto mt-20">
            <button className="container mx-auto flex h-9 w-auto rounded-full border border-slate-400 bg-transparent px-4 pt-2 text-sm hover:border-slate-600">
                Announcing our next round of funding.{' '}
                <a className="pl-1 font-semibold text-indigo-600">
                    Read more
                    <FontAwesomeIcon className="pl-2" icon={faArrowRight} />{' '}
                </a>
            </button>
            <div className="mx-auto mt-10 flex w-[30rem] flex-col ">
                <h1 className="text-center text-5xl font-bold ">Data to enrich your online business</h1>
                <h1 className="mt-4 text-center">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                    amet fugiat veniam occaecat fugiat aliqua.
                </h1>
            </div>
            <div className="mx-auto mt-4 flex content-center justify-center text-sm">
                <button className="mr-4 rounded-md bg-indigo-600 px-3 py-2 text-white">Get started</button>
                <button className="rounded-xl font-semibold">
                    Learn more <FontAwesomeIcon className="pl-2" icon={faArrowRight} />{' '}
                </button>
            </div>
        </div>
    );
}

export default Content;
