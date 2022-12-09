export const apiEndpoints = {
  categories: {
    getAllCategories: '/api/categories/all',
    getAllCategoriesPagination: '/api/categories/all-pagination',
    getAvailableCategories: '/api/categories/available',
    getAvailableCategoriesPagination: '/api/categories/available-pagination',
    getCategoryById: (id: number) => `/api/categories/${id}`,
    createCategory: '/api/categories',
    updateCategory: '/api/categories',
    deleteCategory: (id: number) => `/api/categories/${id}`,
  },
  brands: {
    getAllBrands: '/api/brands/all',
    getAllBrandsPagination: '/api/brands/all-pagination',
    getAvailableBrands: '/api/brands/available',
    getAvailableBrandsPagination: '/api/brands/available-pagination',
    getBrandById: (id: number) => `/api/brands/${id}`,
    createBrand: '/api/brands',
    updateBrand: '/api/brands',
    deleteBrand: (id: number) => `/api/brands/${id}`,
  },
  appConfigs: {
    getAllAppConfigs: '/api/appconfigs/all',
    getAllAppConfigsPagination: '/api/appconfigs/all-pagination',
    getAvailableAppConfigs: '/api/appconfigs/available',
    getAvailableAppConfigsPagination: '/api/appconfigs/available-pagination',
    getAppConfigById: (id: number) => `/api/appconfigs/${id}`,
    createAppConfig: '/api/appconfigs',
    updateAppConfig: '/api/appconfigs',
    deleteAppConfig: (id: number) => `/api/appconfigs/${id}`,
  },
  contacts: {
    getAllContacts: '/api/contacts/all',
    getAllContactsPagination: '/api/contacts/all-pagination',
    getAvailableContacts: '/api/contacts/available',
    getAvailableContactsPagination: '/api/contacts/available-pagination',
    getContactById: (id: string) => `/api/contacts/${id}`,
    createContact: '/api/contacts',
    updateContact: '/api/contacts',
    deleteContact: (id: string) => `/api/contacts/${id}`,
  },
  tags: {
    getAllTags: '/api/tags/all',
    getAllTagsPagination: '/api/tags/all-pagination',
    getAvailableTags: '/api/tags/available',
    getAvailableTagsPagination: '/api/tags/available-pagination',
    getTagById: (id: number) => `/api/tags/${id}`,
    createTag: '/api/tags',
    updateTag: '/api/tags',
    deleteTag: (id: number) => `/api/tags/${id}`,
  },
  products: {
    getAllProducts: '/api/products/all',
    getAllProductsPagination: '/api/products/all-pagination',
    getAvailableProducts: '/api/products/available',
    getAvailableProductsPagination: '/api/products/available-pagination',
    getProductById: (id: string) => `/api/products/${id}`,
    createProduct: '/api/products',
    updateProduct: '/api/products',
    updateProductImages: '/api/products/images',
    deleteProduct: (id: string) => `/api/products/${id}`,
  },
  accounts: {
    login: '/api/accounts/login',
    revoke: (name: string) =>
      `/api/accounts/revoke-token?name=${encodeURIComponent(name)}`,
  },
};
