function CategoryFilter(props) {
  const { categories, handleSelectedCategory ,selectedCategory } = props;
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category,index) => {
        const className = category === selectedCategory ? "selected" : null;
          return( 
            <button 
              key={index}
              className={className}
              onClick={() => handleSelectedCategory(category)}>
              {category}
            </button>)
        })}
    </div>
  );
}

export default CategoryFilter;