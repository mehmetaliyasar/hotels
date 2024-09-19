import Container from "../Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b bg-gray-100">
      <Container designs="flex justify-between p-5">
        <div className="flex gap-10">
          <h1 className="font-bold text-xl">Tripster</h1>

          <nav className="flex gap-5 items-center">
            <Link className="hover:text-lg" to="/">
              Oteller
            </Link>
            <Link className="max-md:hidden  hover:text-lg " to="/">
              Popüler
            </Link>
            <Link className="hover:text-lg" to="/admin/create">
              Oluştur
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <button className="border border-blue-500 rounded-full py-1 px-5 max-md:hidden">
            Kayıt Ol
          </button>
          <button className="bg-blue-500 text-white rounded-full py-1 px-5">
            Giriş Yap
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
