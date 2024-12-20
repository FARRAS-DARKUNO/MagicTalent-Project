
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';

interface INavbarPropsPortFolio {
    theams?: string
}

const Navbar: React.FC<INavbarPropsPortFolio> = () => {

    const theme = useSelector((state: RootState) => state.themeChange.Theme);

    const menus = [
        'Project',
        'Certificate',
        'Article',
    ];

    return (
        <nav className={`${theme} flex fixed top-0 left-0 w-full py-4 px-16 items-center justify-between h-[64px] background-default z-50`}>
            <h5 className={`text-primary`}>
                Nama Pengguna
            </h5>
            <div className="flex flex-row items-center gap-7">
                {menus.map((menu, index) => (
                    <h6 key={index}>{menu}</h6>
                ))}
            </div>
        </nav >
    );
};

export default Navbar;
