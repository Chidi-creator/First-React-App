const Overview = ({renderItems}) => {
    return ( 
        <div className="task-lists">
                <ul>
                    {renderItems}
                </ul>
        </div>
     );
}
 
export default Overview;