const ERR_CONNECTION_RESET = 'ERR_CONNECTION_RESET'
const ERR_CONNECTION_CLOSED = 'ERR_CONNECTION_CLOSED'
const ERR_CERT_COMMON_NAME_INVALID = 'ERR_CERT_COMMON_NAME_INVALID'
const ERR_HTTP2_PROTOCOL_ERROR = 'ERR_HTTP2_PROTOCOL_ERROR'
const ERR_CERT_AUTHORITY_INVALID = 'ERR_CERT_AUTHORITY_INVALID'
const ERR_CONNECTION_TIMED_OUT = 'ERR_CONNECTION_TIMED_OUT'
const ERR_TUNNEL_CONNECTION_FAILED = 'ERR_TUNNEL_CONNECTION_FAILED'
const ERR_PROXY_CONNECTION_FAILED = 'ERR_PROXY_CONNECTION_FAILED'

class Errors {
  isThereProxyConnectionError = (error) => [
    ERR_TUNNEL_CONNECTION_FAILED,
    ERR_PROXY_CONNECTION_FAILED,
  ].includes(error)

  isThereConnectionError = (error) => [
    ERR_CONNECTION_RESET,
    ERR_CONNECTION_CLOSED,
    ERR_CONNECTION_TIMED_OUT,
  ].includes(error)

  isThereCertificateError = (error) => [
    ERR_CERT_AUTHORITY_INVALID,
    ERR_CERT_COMMON_NAME_INVALID,
  ].includes(error)

  isThereAvailabilityError = (error) => [
    ERR_HTTP2_PROTOCOL_ERROR,
  ].includes(error)
}

export default new Errors()
