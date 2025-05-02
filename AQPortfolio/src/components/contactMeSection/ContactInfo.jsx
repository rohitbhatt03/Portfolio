import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="bhattrohit050@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+919917124788" Image={FiPhone} />
      <SingleInfo text="Dehradun, India" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
