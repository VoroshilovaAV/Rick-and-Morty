export const mockLocalStorage = () => {
  const setItemMock = jest.fn();
  const getItemMock = jest.fn();
  const saveStorageSetItem = Storage.prototype.setItem;
  const saveStorageGetItem = Storage.prototype.getItem;

  beforeEach(() => {
    Storage.prototype.setItem = setItemMock;
    Storage.prototype.getItem = getItemMock;
  });

  afterEach(() => {
    setItemMock.mockRestore();
    getItemMock.mockRestore();
  });

  afterAll(() => {
    Storage.prototype.setItem = saveStorageSetItem;
    Storage.prototype.getItem = saveStorageGetItem;
  });

  return { setItemMock, getItemMock };
};
