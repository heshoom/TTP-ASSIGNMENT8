const Results = (props) => {
    
    const { data } = props;
    
    return (
    <>
      {Array.isArray(props.data) ? (
        data.map((gif) => (
          <img
            id="display"
            key={gif.id}
            src={gif.images.fixed_height.url}
            alt="gif"
            autoPlay
            loop
            inline="true"
          />
        ))
      ) : (
        <p>No results found.</p>
      )}
    </>
  );
};

export default Results;
