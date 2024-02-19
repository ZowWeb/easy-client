export type ServerErrorResponse = {
  error: string
  message: string[]
  statusCode: number
}

export type UserResponse = {
  token: string
  expiresIn: number
}
