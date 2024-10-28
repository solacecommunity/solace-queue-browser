import { Body } from "@tauri-apps/api/http";
import { http } from '../../tauri/api';


export class ApiClient {
  constructor() {
    this.authentications = {
      'basicAuth': { type: 'basic' }
    };
  }

  buildCollectionParam(param, collectionFormat) {
    if (param == null) {
      return null;
    }
    switch (collectionFormat) {
      case 'csv':
        return param.map(this.paramToString).join(',');
      case 'ssv':
        return param.map(this.paramToString).join(' ');
      case 'tsv':
        return param.map(this.paramToString).join('\t');
      case 'pipes':
        return param.map(this.paramToString).join('|');
      case 'multi':
        //return the array directly as SuperAgent will handle it as expected
        return param.map(this.paramToString);
      default:
        throw new Error('Unknown collection format: ' + collectionFormat);
    }
  }

  buildUrl(path, pathParams) {
    if (!path.match(/^\//)) {
      path = '/' + path;
    }

    var url = this.basePath + path;
    url = url.replace(/\{([\w-]+)\}/g, (fullMatch, key) => {
      var value;
      if (pathParams.hasOwnProperty(key)) {
        value = this.paramToString(pathParams[key]);
      } else {
        value = fullMatch;
      }

      return encodeURIComponent(value);
    });

    return url;
  }

  callApi(   
    path, httpMethod, pathParams, queryParams, headerParams,
    formParams, bodyParam, authNames, contentTypes, accepts, returnType) {
    
    const { fetch } = http;
    const url = this.buildUrl(path, pathParams)
    const urlParams = this.normalizeParams(queryParams);

    const args = {
      request: { 
        path, httpMethod, pathParams, queryParams, headerParams,
        formParams, bodyParam, authNames, contentTypes, accepts, returnType
      },
      response: {}
    };

    console.trace(`${httpMethod} ${url}`, args);
    const { username, password } = this.authentications.basicAuth;

    return fetch(url, {
      method: httpMethod,
      headers: {
        'Authorization': `Basic ${btoa(`${username}:${password}`)}`
      },
      body: bodyParam ? Body.json(bodyParam) : undefined,
      query: urlParams
    }).then(resp => {
      args.response = resp;
      return resp;
    })
  }

  normalizeParams(params) {
    var newParams = {};
    for (var key in params) {
      if (params.hasOwnProperty(key) && params[key] != undefined && params[key] != null) {
        var value = params[key];
        newParams[key] = this.paramToString(value);
      }
    }

    return newParams;
  }

  paramToString(param) {
    if (param == undefined || param == null) {
      return '';
    }
    if (param instanceof Date) {
      return param.toJSON();
    }

    return param.toString();
  }
}

ApiClient.instance = new ApiClient();