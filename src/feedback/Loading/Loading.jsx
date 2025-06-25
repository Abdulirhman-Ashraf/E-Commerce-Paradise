const Loading = ({ children, loading, error }) => {
  if (loading) {
    return <h3>Loading...</h3>;
  }
  if (!loading && error !== null) {
    return <h3>error:{error}</h3>  ;
  }
  return children ;
};

export default Loading;
