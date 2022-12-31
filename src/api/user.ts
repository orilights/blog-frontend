import request from '@/utils/request'

export function register(username: string, nickname: string, password: string, email: string, sex: string) {
  return request({
    url: '/user/register',
    method: 'post',
    data: {
      username,
      nickname,
      password,
      email,
      sex
    }
  })
}

export function login(username: string, password: string): any {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function verify(token: string, uid: number) {
  return request({
    url: '/user/verify',
    method: 'post',
    data: {
      uid,
      token
    }
  })
}

export function getInfo(uid: number): any {
  return request({
    url: '/user/getInfo',
    method: 'get',
    params: {
      uid
    }
  })
}