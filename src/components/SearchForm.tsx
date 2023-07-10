import { useForm } from "react-hook-form";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface IKeywordProps {
  keyword: string;
}

export default function SearchForm() {
  const { register, handleSubmit } = useForm<IKeywordProps>();
  const navigate = useNavigate();

  const onValid = (data: IKeywordProps) => {
    navigate(`/search?keyword=${data.keyword}`);
  };

  return (
    <form
      className="flex items-center space-x-2"
      onSubmit={handleSubmit(onValid)}
    >
      <input
        {...register("keyword", { required: "검색어를 입력해주세요." })}
        className="w-60 px-2 py-1 border border-gray-200 outline-none text-sm rounded-md"
        placeholder="검색어를 입력하세요."
      />
      <button>
        <BsSearch />
      </button>
    </form>
  );
}
