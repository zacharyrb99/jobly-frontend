import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

class JoblyAPI {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyAPI.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on all companies */
  static async getCompanies(nameVal, minEmployeesVal, maxEmployeesVal) {
    let searchData = {};
    
    if(nameVal !== '') {
      searchData.name = nameVal;
    }

    if(minEmployeesVal !== '') {
      searchData.minEmployees = minEmployeesVal;
    }

    if(maxEmployeesVal !== '') {
      searchData.maxEmployees = maxEmployeesVal;
    }
    let res = await this.request('companies', searchData);
    return res.companies;
  }

  /** Get details on a company by handle. */
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get details on all jobs */
  static async getJobs(titleVal, minSalaryVal) {
    let searchData = {};

    if(titleVal !== ''){
      searchData.title = titleVal;
    }

    if(minSalaryVal !== ''){
      searchData.minSalary = minSalaryVal;
    }

    let res = await this.request('jobs', searchData);
    return res.jobs;
  }

  /** Apply to job */
  static async applyToJob(username, id) {
    await this.request(`users/${username}/jobs/${id}`, {}, 'post');
  }

  /** Sign up for a profile */
  static async signUp(username, password, firstName, lastName, email) {
    let registerData = {username, password, firstName, lastName, email};

    let res = await this.request('auth/register', registerData, 'post');
    return res.token;
  }

  /** Log in to your profile */
  static async login(username, password) {
    let loginData = {username, password};

    let res = await this.request('auth/token', loginData, 'post');
    return res.token;
  }

  /** Get Current User */
  static async getCurrUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /** Update user profile info */
  static async updateProfile(username, data) {
    let res = await this.request(`users/${username}`, data, 'patch');
    return res.user;
  }
  // obviously, you'll add a lot here ...

}

// for now, put token ("testuser" / "password" on class)

export default JoblyAPI;