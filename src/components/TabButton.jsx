const TabButton=({children,handleClick,isSelected})=>{
    return(
        <>
        <li>
            <button onClick={handleClick} className={isSelected?'active':''}>{children}</button>
        </li>
        </>
    )
}
export default TabButton;