export const fetchTenders = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: 'New Tender', description: 'Description 1', deadline: '2024-12-31', document: 'https://beige-orelle-33.tiiny.site/' },
          { id: 2, title: 'Another Tender', description: 'Description 2', deadline: '2024-11-30', document: '/docs/tender2.pdf' },
          { id: 3, title: 'Tender 3', description: 'Description 3', deadline: '2024-08-30', document: '/docs/tender3.pdf' },
          { id: 4, title: 'Tender 4', description: 'Description 4', deadline: '2024-05-30', document: '/docs/tender4.pdf' },
        ]);
        reject(new Error('Failed to load tenders'));
      }, 1000);
    });
  };
export const login = (username, password) => {
    if (username === 'user' && password === 'password') {
        localStorage.setItem('user', 'user')
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  };
  
  export const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('isAuthenticated');
  };
  
  
