
const RightSidebar = ({ isOpen, toggle, title, children, visible }) => (
    <aside
        className={`
        fixed right-0 top-0 h-full w-64 bg-white shadow-lg z-40 p-0
        overflow-auto
        transition-transform duration-300 ease-in-out
        ${visible ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
        <div className="sticky top-0 bg-white z-10 border-b p-4 flex justify-between items-center">
            <h2 className="text-lg font-bold">{title}</h2>
            <button onClick={() => toggle()}>✕</button>
        </div>
        <div className="p-4 space-y-4">
            {children}
        </div>
    </aside>
)


export default RightSidebar