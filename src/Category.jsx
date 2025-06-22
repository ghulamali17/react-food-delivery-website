import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
const Categories = [
  {
    id: 1,
    name: "All",
    Image: <TiThSmallOutline className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 2,
    name: "breakfast",
    Image: (
      <MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600" />
    ),
  },
  {
    id: 3,
    name: "soups",
    Image: <TbSoup className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 4,
    name: "pasta",
    Image: <CiBowlNoodles className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 5,
    name: "main_course",
    Image: <MdOutlineFoodBank className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 6,
    name: "pizza",
    Image: <GiFullPizza className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 7,
    name: "burger",
    Image: <GiHamburger className="w-[60px] h-[60px] text-green-600" />,
  },
];

export default Categories;
