const API_URL = 'http://localhost:3000';

export const createUser = async (username) => {
    const response = await fetch(`${API_URL}/Users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
    });
    if (!response.ok) {
        throw new Error('Failed to create user');
    }
    return response.json();
};

export const createOrder = async (order) => {
    const response = await fetch(`${API_URL}/Online-orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
    });
    if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
    }
    return response.json();
};
export const createPhysicalOrder = async (order) => {
    const response = await fetch(`${API_URL}/Physical-orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
    });
    if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
    }
    return response.json();
};
export const createRiverOrder = async (order) => {
    const response = await fetch(`${API_URL}/Sinica`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
    });
    if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
    }
    return response.json();
};
export const restockAndRefund = async (order) => {
    const response = await fetch(`${API_URL}/Restock-and-Refund`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
    });
    if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
    }
    return response.json();
};
export const eventsToDo = async (order) => {
    const response = await fetch(`${API_URL}/Events-todo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
    });
    if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
    }
    return response.json();
};

//郭 今日代辦
export const Todaytodo = async () => {
    const response = await fetch(`${API_URL}/Home`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }
  
    const data = await response.json();
    console.log('Data from API:', data); // test
    return data || []; 
}

export const Overview = async () => {
    const response = await fetch(`${API_URL}/Works`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }
  
    const data = await response.json();
    console.log('Data from API:', data); // test
    return data || []; 
}

export const showonlineorders = async () => {
    const response = await fetch(`${API_URL}/Online-orders`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }
  
    const data = await response.json();
    console.log('Data from API:', data); // test
    return data || []; 
}

export const showeventstodo = async () => {
    const response = await fetch(`${API_URL}/Events-todo`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }
  
    const data = await response.json();
    console.log('Data from API:', data); // test
    return data || []; 
}

export const showphysicalorders = async () => {
    const response = await fetch(`${API_URL}/Physical-orders`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }
  
    const data = await response.json();
    console.log('Data from API:', data); // test
    return data || []; 
}

export const showsinica = async () => {
    const response = await fetch(`${API_URL}/Sinica`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }
  
    const data = await response.json();
    console.log('Data from API:', data); // test
    return data || []; 
}

export const showrestockandrefund = async () => {
    const response = await fetch(`${API_URL}/Restock-and-Refund`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }
  
    const data = await response.json();
    console.log('Data from API:', data); // test
    return data || []; 
}

export const showusers = async () => {
    const response = await fetch(`${API_URL}/Users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }
  
    const data = await response.json();
    console.log('Data from API:', data); // test
    return data || []; 
}