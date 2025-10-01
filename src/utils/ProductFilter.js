class ProductFilter {
  static filter(products, category, searchQuery) {
    return products.filter(p => {
      const matchesCategory = category === 'all' || p.category === category;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  static paginate(products, page, itemsPerPage) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return products.slice(start, end);
  }

  static getTotalPages(products, itemsPerPage) {
    return Math.ceil(products.length / itemsPerPage);
  }
}

export default ProductFilter;