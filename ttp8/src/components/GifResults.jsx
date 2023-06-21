

const Results = (props) => {
    return (
        <>
            {props.data.map((gif) => {
                return (
                    <div key = {gif.id}>
                        <img id="display" src= {gif.images.fixed_height.url} alt = "gif" autoplay loop inline="true"></img>
                    </div>
                );
            }
         )}
        </>
        
    );
}

export default Results