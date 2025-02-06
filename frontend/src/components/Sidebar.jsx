import { useState } from "react";
import { Home, Star, Gamepad, HelpCircle, Cpu, Film, MoreHorizontal, Info, Megaphone, LifeBuoy, Menu } from "lucide-react";

const Sidebar = () => {
    const [openSections, setOpenSections] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const toggleSection = (section) => {
        setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <div className="bg-black fixed md:mt-[6.5vh]" >
            <div >
                <button className="md:hidden p-4" onClick={() => setIsOpen(!isOpen)}>
                    <Menu size={24} className="text-white" />
                </button>
                <div className="flex">
                    <div className={`w-64 bg-black text-white h-screen p-4 flex flex-col ${isOpen ? "block" : "hidden"} md:block`}>
                        <div className="mb-4">
                            <button className="flex items-center space-x-2 w-full p-2 rounded-lg hover:bg-gray-800">
                                <Home size={20} />
                                <span>Home</span>
                            </button>
                            <button className="flex items-center space-x-2 w-full p-2 rounded-lg hover:bg-gray-800">
                                <Star size={20} />
                                <span>Popular</span>
                            </button>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-gray-400 uppercase text-sm mb-2">Recent</h3>
                            <button className="flex items-center space-x-2 w-full p-2 rounded-lg hover:bg-gray-800">
                                <img src="/placeholder-icon.png" alt="icon" className="w-5 h-5" />
                                <span>r/Piracy</span>
                            </button>
                        </div>

                        <div>
                            <h3 className="text-gray-400 uppercase text-sm mb-2">Topics</h3>
                            {[
                                { name: "Internet Culture (Viral)", icon: Star },
                                { name: "Games", icon: Gamepad },
                                { name: "Q&As", icon: HelpCircle },
                                { name: "Technology", icon: Cpu },
                                { name: "Pop Culture", icon: Star },
                                { name: "Movies & TV", icon: Film },
                            ].map((topic, index) => (
                                <div key={index}>
                                    <button
                                        className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-gray-800"
                                        onClick={() => toggleSection(topic.name)}
                                    >
                                        <div className="flex items-center space-x-2">
                                            <topic.icon size={20} />
                                            <span>{topic.name}</span>
                                        </div>
                                        <MoreHorizontal size={16} />
                                    </button>
                                    {openSections[topic.name] && <div className="pl-8 text-gray-400 text-sm">(Subcategories...)</div>}
                                </div>
                            ))}
                            <button className="text-blue-400 mt-2 w-full text-left p-2">See more</button>
                        </div>

                        <div className="mt-auto">
                            <h3 className="text-gray-400 uppercase text-sm mb-2">Resources</h3>
                            {[
                                { name: "About Reddit", icon: Info },
                                { name: "Advertise", icon: Megaphone },
                                { name: "Help", icon: LifeBuoy },
                            ].map((resource, index) => (
                                <button key={index} className="flex items-center space-x-2 w-full p-2 rounded-lg hover:bg-gray-800">
                                    <resource.icon size={20} />
                                    <span>{resource.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white h-[100vh] w-[1px]"></div>
                </div>
            </div>

        </div>
    );
};

export default Sidebar;
