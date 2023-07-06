import { BsSearch } from "react-icons/bs";

export default function Search() {
  return (
    <form className="flex items-center space-x-2">
      <input
        className="w-60 p-1 border border-gray-200 outline-none text-sm rounded-md"
        placeholder="검색어를 입력하세요."
      />
      <button>
        <BsSearch />
      </button>
    </form>
  );
}
