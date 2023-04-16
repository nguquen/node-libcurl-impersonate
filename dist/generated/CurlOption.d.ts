/**
 * Copyright (c) Jonathan Cardoso Machado. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/// <reference types="node" />
import { CurlChunk } from '../enum/CurlChunk';
import { CurlFnMatchFunc } from '../enum/CurlFnMatchFunc';
import { CurlFtpMethod } from '../enum/CurlFtpMethod';
import { CurlFtpSsl } from '../enum/CurlFtpSsl';
import { CurlGssApi } from '../enum/CurlGssApi';
import { CurlHeader } from '../enum/CurlHeader';
import { CurlHsts, CurlHstsCacheCount, CurlHstsCacheEntry } from '../enum/CurlHsts';
import { CurlHttpVersion } from '../enum/CurlHttpVersion';
import { CurlInfoDebug } from '../enum/CurlInfoDebug';
import { CurlIpResolve } from '../enum/CurlIpResolve';
import { CurlNetrc } from '../enum/CurlNetrc';
import { CurlProgressFunc } from '../enum/CurlProgressFunc';
import { CurlProtocol } from '../enum/CurlProtocol';
import { CurlProxy } from '../enum/CurlProxy';
import { CurlRtspRequest } from '../enum/CurlRtspRequest';
import { CurlSshAuth } from '../enum/CurlSshAuth';
import { CurlSslOpt } from '../enum/CurlSslOpt';
import { CurlSslVersion } from '../enum/CurlSslVersion';
import { CurlTimeCond } from '../enum/CurlTimeCond';
import { CurlUseSsl } from '../enum/CurlUseSsl';
import { EasyNativeBinding } from '../types/EasyNativeBinding';
import { Share } from '../Share';
/**
 * @public
 */
export interface CurlOption {
    /**
     * Path to an abstract Unix domain socket.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ABSTRACT_UNIX_SOCKET.html](https://curl.haxx.se/libcurl/c/CURLOPT_ABSTRACT_UNIX_SOCKET.html)
     */
    readonly ABSTRACT_UNIX_SOCKET: 'ABSTRACT_UNIX_SOCKET';
    /**
     * Accept-Encoding and automatic decompressing data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ACCEPT_ENCODING.html](https://curl.haxx.se/libcurl/c/CURLOPT_ACCEPT_ENCODING.html)
     */
    readonly ACCEPT_ENCODING: 'ACCEPT_ENCODING';
    /**
     * Timeout for waiting for the server's connect back to be accepted.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ACCEPTTIMEOUT_MS.html](https://curl.haxx.se/libcurl/c/CURLOPT_ACCEPTTIMEOUT_MS.html)
     */
    readonly ACCEPTTIMEOUT_MS: 'ACCEPTTIMEOUT_MS';
    /**
     * IPv6 scope for local addresses.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ADDRESS_SCOPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_ADDRESS_SCOPE.html)
     */
    readonly ADDRESS_SCOPE: 'ADDRESS_SCOPE';
    /**
     * Specify the Alt-Svc: cache file name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ALTSVC.html](https://curl.haxx.se/libcurl/c/CURLOPT_ALTSVC.html)
     */
    readonly ALTSVC: 'ALTSVC';
    /**
     * Enable and configure Alt-Svc: treatment.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ALTSVC_CTRL.html](https://curl.haxx.se/libcurl/c/CURLOPT_ALTSVC_CTRL.html)
     */
    readonly ALTSVC_CTRL: 'ALTSVC_CTRL';
    /**
     * Append to remote file.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_APPEND.html](https://curl.haxx.se/libcurl/c/CURLOPT_APPEND.html)
     */
    readonly APPEND: 'APPEND';
    /**
     * Automatically set Referer: header.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_AUTOREFERER.html](https://curl.haxx.se/libcurl/c/CURLOPT_AUTOREFERER.html)
     */
    readonly AUTOREFERER: 'AUTOREFERER';
    /**
     * AWS HTTP V4 Signature.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_AWS_SIGV4.html](https://curl.haxx.se/libcurl/c/CURLOPT_AWS_SIGV4.html)
     */
    readonly AWS_SIGV4: 'AWS_SIGV4';
    /**
     * Ask for alternate buffer size.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_BUFFERSIZE.html](https://curl.haxx.se/libcurl/c/CURLOPT_BUFFERSIZE.html)
     */
    readonly BUFFERSIZE: 'BUFFERSIZE';
    /**
     * CA cert bundle.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CAINFO.html](https://curl.haxx.se/libcurl/c/CURLOPT_CAINFO.html)
     */
    readonly CAINFO: 'CAINFO';
    /**
     * CA cert bundle memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CAINFO_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_CAINFO_BLOB.html)
     */
    readonly CAINFO_BLOB: 'CAINFO_BLOB';
    /**
     * Path to CA cert bundle.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CAPATH.html](https://curl.haxx.se/libcurl/c/CURLOPT_CAPATH.html)
     */
    readonly CAPATH: 'CAPATH';
    /**
     * Extract certificate info.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CERTINFO.html](https://curl.haxx.se/libcurl/c/CURLOPT_CERTINFO.html)
     */
    readonly CERTINFO: 'CERTINFO';
    /**
     * Callback for wildcard download start of chunk.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CHUNK_BGN_FUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_CHUNK_BGN_FUNCTION.html)
     */
    readonly CHUNK_BGN_FUNCTION: 'CHUNK_BGN_FUNCTION';
    /**
     * Callback for wildcard download end of chunk.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CHUNK_END_FUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_CHUNK_END_FUNCTION.html)
     */
    readonly CHUNK_END_FUNCTION: 'CHUNK_END_FUNCTION';
    /**
     * Only connect, nothing else.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CONNECT_ONLY.html](https://curl.haxx.se/libcurl/c/CURLOPT_CONNECT_ONLY.html)
     */
    readonly CONNECT_ONLY: 'CONNECT_ONLY';
    /**
     * Connect to a specific host and port.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CONNECT_TO.html](https://curl.haxx.se/libcurl/c/CURLOPT_CONNECT_TO.html)
     */
    readonly CONNECT_TO: 'CONNECT_TO';
    /**
     * Timeout for the connection phase.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CONNECTTIMEOUT.html](https://curl.haxx.se/libcurl/c/CURLOPT_CONNECTTIMEOUT.html)
     */
    readonly CONNECTTIMEOUT: 'CONNECTTIMEOUT';
    /**
     * Millisecond timeout for the connection phase.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CONNECTTIMEOUT_MS.html](https://curl.haxx.se/libcurl/c/CURLOPT_CONNECTTIMEOUT_MS.html)
     */
    readonly CONNECTTIMEOUT_MS: 'CONNECTTIMEOUT_MS';
    /**
     * Cookie(s) to send.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_COOKIE.html](https://curl.haxx.se/libcurl/c/CURLOPT_COOKIE.html)
     */
    readonly COOKIE: 'COOKIE';
    /**
     * File to read cookies from.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_COOKIEFILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_COOKIEFILE.html)
     */
    readonly COOKIEFILE: 'COOKIEFILE';
    /**
     * File to write cookies to.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_COOKIEJAR.html](https://curl.haxx.se/libcurl/c/CURLOPT_COOKIEJAR.html)
     */
    readonly COOKIEJAR: 'COOKIEJAR';
    /**
     * Add or control cookies.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_COOKIELIST.html](https://curl.haxx.se/libcurl/c/CURLOPT_COOKIELIST.html)
     */
    readonly COOKIELIST: 'COOKIELIST';
    /**
     * Start a new cookie session.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_COOKIESESSION.html](https://curl.haxx.se/libcurl/c/CURLOPT_COOKIESESSION.html)
     */
    readonly COOKIESESSION: 'COOKIESESSION';
    /**
     * Convert newlines.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CRLF.html](https://curl.haxx.se/libcurl/c/CURLOPT_CRLF.html)
     */
    readonly CRLF: 'CRLF';
    /**
     * Certificate Revocation List.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CRLFILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_CRLFILE.html)
     */
    readonly CRLFILE: 'CRLFILE';
    /**
     * Custom request/method.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CUSTOMREQUEST.html](https://curl.haxx.se/libcurl/c/CURLOPT_CUSTOMREQUEST.html)
     */
    readonly CUSTOMREQUEST: 'CUSTOMREQUEST';
    /**
     * Callback for debug information.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DEBUGFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_DEBUGFUNCTION.html)
     */
    readonly DEBUGFUNCTION: 'DEBUGFUNCTION';
    /**
     * Default protocol.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DEFAULT_PROTOCOL.html](https://curl.haxx.se/libcurl/c/CURLOPT_DEFAULT_PROTOCOL.html)
     */
    readonly DEFAULT_PROTOCOL: 'DEFAULT_PROTOCOL';
    /**
     * List only.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DIRLISTONLY.html](https://curl.haxx.se/libcurl/c/CURLOPT_DIRLISTONLY.html)
     */
    readonly DIRLISTONLY: 'DIRLISTONLY';
    /**
     * Do not allow username in URL.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DISALLOW_USERNAME_IN_URL.html](https://curl.haxx.se/libcurl/c/CURLOPT_DISALLOW_USERNAME_IN_URL.html)
     */
    readonly DISALLOW_USERNAME_IN_URL: 'DISALLOW_USERNAME_IN_URL';
    /**
     * Timeout for DNS cache.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_CACHE_TIMEOUT.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_CACHE_TIMEOUT.html)
     */
    readonly DNS_CACHE_TIMEOUT: 'DNS_CACHE_TIMEOUT';
    /**
     * Bind name resolves to this interface.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_INTERFACE.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_INTERFACE.html)
     */
    readonly DNS_INTERFACE: 'DNS_INTERFACE';
    /**
     * Bind name resolves to this IP4 address.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_LOCAL_IP4.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_LOCAL_IP4.html)
     */
    readonly DNS_LOCAL_IP4: 'DNS_LOCAL_IP4';
    /**
     * Bind name resolves to this IP6 address.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_LOCAL_IP6.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_LOCAL_IP6.html)
     */
    readonly DNS_LOCAL_IP6: 'DNS_LOCAL_IP6';
    /**
     * Preferred DNS servers.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_SERVERS.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_SERVERS.html)
     */
    readonly DNS_SERVERS: 'DNS_SERVERS';
    /**
     * Shuffle addresses before use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_SHUFFLE_ADDRESSES.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_SHUFFLE_ADDRESSES.html)
     */
    readonly DNS_SHUFFLE_ADDRESSES: 'DNS_SHUFFLE_ADDRESSES';
    /**
     * OBSOLETE Enable global DNS cache.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_USE_GLOBAL_CACHE.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_USE_GLOBAL_CACHE.html)
     */
    readonly DNS_USE_GLOBAL_CACHE: 'DNS_USE_GLOBAL_CACHE';
    /**
     * Verify the host name in the DoH (DNS-over-HTTPS) SSL certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DOH_SSL_VERIFYHOST.html](https://curl.haxx.se/libcurl/c/CURLOPT_DOH_SSL_VERIFYHOST.html)
     */
    readonly DOH_SSL_VERIFYHOST: 'DOH_SSL_VERIFYHOST';
    /**
     * Verify the DoH (DNS-over-HTTPS) SSL certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DOH_SSL_VERIFYPEER.html](https://curl.haxx.se/libcurl/c/CURLOPT_DOH_SSL_VERIFYPEER.html)
     */
    readonly DOH_SSL_VERIFYPEER: 'DOH_SSL_VERIFYPEER';
    /**
     * Verify the DoH (DNS-over-HTTPS) SSL certificate's status.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DOH_SSL_VERIFYSTATUS.html](https://curl.haxx.se/libcurl/c/CURLOPT_DOH_SSL_VERIFYSTATUS.html)
     */
    readonly DOH_SSL_VERIFYSTATUS: 'DOH_SSL_VERIFYSTATUS';
    /**
     * Use this DoH server for name resolves.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DOH_URL.html](https://curl.haxx.se/libcurl/c/CURLOPT_DOH_URL.html)
     */
    readonly DOH_URL: 'DOH_URL';
    /**
     * Identify EGD socket for entropy.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_EGDSOCKET.html](https://curl.haxx.se/libcurl/c/CURLOPT_EGDSOCKET.html)
     */
    readonly EGDSOCKET: 'EGDSOCKET';
    /**
     * 100-continue timeout.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_EXPECT_100_TIMEOUT_MS.html](https://curl.haxx.se/libcurl/c/CURLOPT_EXPECT_100_TIMEOUT_MS.html)
     */
    readonly EXPECT_100_TIMEOUT_MS: 'EXPECT_100_TIMEOUT_MS';
    /**
     * Fail on HTTP 4xx errors.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FAILONERROR.html](https://curl.haxx.se/libcurl/c/CURLOPT_FAILONERROR.html)
     */
    readonly FAILONERROR: 'FAILONERROR';
    /**
     * Request file modification date and time.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FILETIME.html](https://curl.haxx.se/libcurl/c/CURLOPT_FILETIME.html)
     */
    readonly FILETIME: 'FILETIME';
    /**
     * Callback for wildcard matching.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FNMATCH_FUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_FNMATCH_FUNCTION.html)
     */
    readonly FNMATCH_FUNCTION: 'FNMATCH_FUNCTION';
    /**
     * Follow HTTP redirects.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FOLLOWLOCATION.html](https://curl.haxx.se/libcurl/c/CURLOPT_FOLLOWLOCATION.html)
     */
    readonly FOLLOWLOCATION: 'FOLLOWLOCATION';
    /**
     * Prevent subsequent connections from re-using this.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FORBID_REUSE.html](https://curl.haxx.se/libcurl/c/CURLOPT_FORBID_REUSE.html)
     */
    readonly FORBID_REUSE: 'FORBID_REUSE';
    /**
     * Use a new connection.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FRESH_CONNECT.html](https://curl.haxx.se/libcurl/c/CURLOPT_FRESH_CONNECT.html)
     */
    readonly FRESH_CONNECT: 'FRESH_CONNECT';
    /**
     * Send ACCT command.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_ACCOUNT.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_ACCOUNT.html)
     */
    readonly FTP_ACCOUNT: 'FTP_ACCOUNT';
    /**
     * Alternative to USER.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_ALTERNATIVE_TO_USER.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_ALTERNATIVE_TO_USER.html)
     */
    readonly FTP_ALTERNATIVE_TO_USER: 'FTP_ALTERNATIVE_TO_USER';
    /**
     * Create missing directories on the remote server.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_CREATE_MISSING_DIRS.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_CREATE_MISSING_DIRS.html)
     */
    readonly FTP_CREATE_MISSING_DIRS: 'FTP_CREATE_MISSING_DIRS';
    /**
     * Specify how to reach files.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_FILEMETHOD.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_FILEMETHOD.html)
     */
    readonly FTP_FILEMETHOD: 'FTP_FILEMETHOD';
    /**
     * Timeout for FTP responses.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_RESPONSE_TIMEOUT.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_RESPONSE_TIMEOUT.html)
     */
    readonly FTP_RESPONSE_TIMEOUT: 'FTP_RESPONSE_TIMEOUT';
    /**
     * Ignore the IP address in the PASV response.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_SKIP_PASV_IP.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_SKIP_PASV_IP.html)
     */
    readonly FTP_SKIP_PASV_IP: 'FTP_SKIP_PASV_IP';
    /**
     * Back to non-TLS again after authentication.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_SSL_CCC.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_SSL_CCC.html)
     */
    readonly FTP_SSL_CCC: 'FTP_SSL_CCC';
    /**
     * Use EPTR.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_USE_EPRT.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_USE_EPRT.html)
     */
    readonly FTP_USE_EPRT: 'FTP_USE_EPRT';
    /**
     * Use EPSV.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_USE_EPSV.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_USE_EPSV.html)
     */
    readonly FTP_USE_EPSV: 'FTP_USE_EPSV';
    /**
     * Use PRET.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_USE_PRET.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_USE_PRET.html)
     */
    readonly FTP_USE_PRET: 'FTP_USE_PRET';
    /**
     * Use active FTP.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTPPORT.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTPPORT.html)
     */
    readonly FTPPORT: 'FTPPORT';
    /**
     * Control how to do TLS.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTPSSLAUTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTPSSLAUTH.html)
     */
    readonly FTPSSLAUTH: 'FTPSSLAUTH';
    /**
     * Disable GSS-API delegation.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_GSSAPI_DELEGATION.html](https://curl.haxx.se/libcurl/c/CURLOPT_GSSAPI_DELEGATION.html)
     */
    readonly GSSAPI_DELEGATION: 'GSSAPI_DELEGATION';
    /**
     * Timeout for happy eyeballs.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HAPPY_EYEBALLS_TIMEOUT_MS.html](https://curl.haxx.se/libcurl/c/CURLOPT_HAPPY_EYEBALLS_TIMEOUT_MS.html)
     */
    readonly HAPPY_EYEBALLS_TIMEOUT_MS: 'HAPPY_EYEBALLS_TIMEOUT_MS';
    /**
     * Send an HAProxy PROXY protocol v1 header.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HAPROXYPROTOCOL.html](https://curl.haxx.se/libcurl/c/CURLOPT_HAPROXYPROTOCOL.html)
     */
    readonly HAPROXYPROTOCOL: 'HAPROXYPROTOCOL';
    /**
     * Include the header in the body output.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HEADER.html](https://curl.haxx.se/libcurl/c/CURLOPT_HEADER.html)
     */
    readonly HEADER: 'HEADER';
    /**
     * Callback for writing received headers.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HEADERFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_HEADERFUNCTION.html)
     */
    readonly HEADERFUNCTION: 'HEADERFUNCTION';
    /**
     * Control custom headers.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HEADEROPT.html](https://curl.haxx.se/libcurl/c/CURLOPT_HEADEROPT.html)
     */
    readonly HEADEROPT: 'HEADEROPT';
    /**
     * Set HSTS cache file.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HSTS.html](https://curl.haxx.se/libcurl/c/CURLOPT_HSTS.html)
     */
    readonly HSTS: 'HSTS';
    /**
     * Enable HSTS.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HSTS_CTRL.html](https://curl.haxx.se/libcurl/c/CURLOPT_HSTS_CTRL.html)
     */
    readonly HSTS_CTRL: 'HSTS_CTRL';
    /**
     * Set HSTS read callback.
     *
     * You can either return a single `CurlHstsReadCallbackResult` object or an array of `CurlHstsReadCallbackResult` objects.
     * If returning an array, the callback will only be called once per request.
     * If returning a single object, the callback will be called multiple times until `null` is returned.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HSTSREADFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_HSTSREADFUNCTION.html)
     */
    readonly HSTSREADFUNCTION: 'HSTSREADFUNCTION';
    /**
     * Set HSTS write callback.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HSTSWRITEFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_HSTSWRITEFUNCTION.html)
     */
    readonly HSTSWRITEFUNCTION: 'HSTSWRITEFUNCTION';
    /**
     * Disable Content decoding.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTP_CONTENT_DECODING.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTP_CONTENT_DECODING.html)
     */
    readonly HTTP_CONTENT_DECODING: 'HTTP_CONTENT_DECODING';
    /**
     * Disable Transfer decoding.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTP_TRANSFER_DECODING.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTP_TRANSFER_DECODING.html)
     */
    readonly HTTP_TRANSFER_DECODING: 'HTTP_TRANSFER_DECODING';
    /**
     * HTTP version to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTP_VERSION.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTP_VERSION.html)
     */
    readonly HTTP_VERSION: 'HTTP_VERSION';
    /**
     * Allow HTTP/0.9 responses.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTP09_ALLOWED.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTP09_ALLOWED.html)
     */
    readonly HTTP09_ALLOWED: 'HTTP09_ALLOWED';
    /**
     * Alternative versions of 200 OK.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTP200ALIASES.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTP200ALIASES.html)
     */
    readonly HTTP200ALIASES: 'HTTP200ALIASES';
    /**
     * HTTP server authentication methods.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTPAUTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTPAUTH.html)
     */
    readonly HTTPAUTH: 'HTTPAUTH';
    /**
     * Do an HTTP GET request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTPGET.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTPGET.html)
     */
    readonly HTTPGET: 'HTTPGET';
    /**
     * Custom HTTP headers.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTPHEADER.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTPHEADER.html)
     */
    readonly HTTPHEADER: 'HTTPHEADER';
    /**
     * Multipart formpost HTTP POST.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTPPOST.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTPPOST.html)
     */
    readonly HTTPPOST: 'HTTPPOST';
    /**
     * Tunnel through the HTTP proxy.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTPPROXYTUNNEL.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTPPROXYTUNNEL.html)
     */
    readonly HTTPPROXYTUNNEL: 'HTTPPROXYTUNNEL';
    /**
     * Ignore Content-Length.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_IGNORE_CONTENT_LENGTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_IGNORE_CONTENT_LENGTH.html)
     */
    readonly IGNORE_CONTENT_LENGTH: 'IGNORE_CONTENT_LENGTH';
    /**
     * Size of file to send.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_INFILESIZE.html](https://curl.haxx.se/libcurl/c/CURLOPT_INFILESIZE.html)
     */
    readonly INFILESIZE: 'INFILESIZE';
    /**
     * Size of file to send.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_INFILESIZE_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_INFILESIZE_LARGE.html)
     */
    readonly INFILESIZE_LARGE: 'INFILESIZE_LARGE';
    /**
     * Bind connection locally to this.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_INTERFACE.html](https://curl.haxx.se/libcurl/c/CURLOPT_INTERFACE.html)
     */
    readonly INTERFACE: 'INTERFACE';
    /**
     * IP version to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_IPRESOLVE.html](https://curl.haxx.se/libcurl/c/CURLOPT_IPRESOLVE.html)
     */
    readonly IPRESOLVE: 'IPRESOLVE';
    /**
     * Issuer certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ISSUERCERT.html](https://curl.haxx.se/libcurl/c/CURLOPT_ISSUERCERT.html)
     */
    readonly ISSUERCERT: 'ISSUERCERT';
    /**
     * Issuer certificate memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ISSUERCERT_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_ISSUERCERT_BLOB.html)
     */
    readonly ISSUERCERT_BLOB: 'ISSUERCERT_BLOB';
    /**
     * Keep sending on HTTP \>= 300 errors.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_KEEP_SENDING_ON_ERROR.html](https://curl.haxx.se/libcurl/c/CURLOPT_KEEP_SENDING_ON_ERROR.html)
     */
    readonly KEEP_SENDING_ON_ERROR: 'KEEP_SENDING_ON_ERROR';
    /**
     * Client key password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_KEYPASSWD.html](https://curl.haxx.se/libcurl/c/CURLOPT_KEYPASSWD.html)
     */
    readonly KEYPASSWD: 'KEYPASSWD';
    /**
     * Kerberos security level.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_KRBLEVEL.html](https://curl.haxx.se/libcurl/c/CURLOPT_KRBLEVEL.html)
     */
    readonly KRBLEVEL: 'KRBLEVEL';
    /**
     * Bind connection locally to this port.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_LOCALPORT.html](https://curl.haxx.se/libcurl/c/CURLOPT_LOCALPORT.html)
     */
    readonly LOCALPORT: 'LOCALPORT';
    /**
     * Bind connection locally to port range.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_LOCALPORTRANGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_LOCALPORTRANGE.html)
     */
    readonly LOCALPORTRANGE: 'LOCALPORTRANGE';
    /**
     * Login options.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_LOGIN_OPTIONS.html](https://curl.haxx.se/libcurl/c/CURLOPT_LOGIN_OPTIONS.html)
     */
    readonly LOGIN_OPTIONS: 'LOGIN_OPTIONS';
    /**
     * Low speed limit to abort transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_LOW_SPEED_LIMIT.html](https://curl.haxx.se/libcurl/c/CURLOPT_LOW_SPEED_LIMIT.html)
     */
    readonly LOW_SPEED_LIMIT: 'LOW_SPEED_LIMIT';
    /**
     * Time to be below the speed to trigger low speed abort.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_LOW_SPEED_TIME.html](https://curl.haxx.se/libcurl/c/CURLOPT_LOW_SPEED_TIME.html)
     */
    readonly LOW_SPEED_TIME: 'LOW_SPEED_TIME';
    /**
     * Authentication address.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_AUTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_AUTH.html)
     */
    readonly MAIL_AUTH: 'MAIL_AUTH';
    /**
     * Address of the sender.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_FROM.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_FROM.html)
     */
    readonly MAIL_FROM: 'MAIL_FROM';
    /**
     * Address of the recipients.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_RCPT.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_RCPT.html)
     */
    readonly MAIL_RCPT: 'MAIL_RCPT';
    /**
     * Allow RCPT TO command to fail for some recipients.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_RCPT_ALLLOWFAILS.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_RCPT_ALLLOWFAILS.html)
     */
    readonly MAIL_RCPT_ALLLOWFAILS: 'MAIL_RCPT_ALLLOWFAILS';
    /**
     * Cap the download speed to this.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAX_RECV_SPEED_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAX_RECV_SPEED_LARGE.html)
     */
    readonly MAX_RECV_SPEED_LARGE: 'MAX_RECV_SPEED_LARGE';
    /**
     * Cap the upload speed to this.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAX_SEND_SPEED_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAX_SEND_SPEED_LARGE.html)
     */
    readonly MAX_SEND_SPEED_LARGE: 'MAX_SEND_SPEED_LARGE';
    /**
     * Limit the age (idle time) of connections for reuse.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAXAGE_CONN.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAXAGE_CONN.html)
     */
    readonly MAXAGE_CONN: 'MAXAGE_CONN';
    /**
     * Maximum number of connections in the connection pool.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAXCONNECTS.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAXCONNECTS.html)
     */
    readonly MAXCONNECTS: 'MAXCONNECTS';
    /**
     * Maximum file size to get.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAXFILESIZE.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAXFILESIZE.html)
     */
    readonly MAXFILESIZE: 'MAXFILESIZE';
    /**
     * Maximum file size to get.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAXFILESIZE_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAXFILESIZE_LARGE.html)
     */
    readonly MAXFILESIZE_LARGE: 'MAXFILESIZE_LARGE';
    /**
     * Limit the age (since creation) of connections for reuse.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAXLIFETIME_CONN.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAXLIFETIME_CONN.html)
     */
    readonly MAXLIFETIME_CONN: 'MAXLIFETIME_CONN';
    /**
     * Maximum number of redirects to follow.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAXREDIRS.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAXREDIRS.html)
     */
    readonly MAXREDIRS: 'MAXREDIRS';
    /**
     * Set MIME option flags.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MIME_OPTIONS.html](https://curl.haxx.se/libcurl/c/CURLOPT_MIME_OPTIONS.html)
     */
    readonly MIME_OPTIONS: 'MIME_OPTIONS';
    /**
     * Post/send MIME data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MIMEPOST.html](https://curl.haxx.se/libcurl/c/CURLOPT_MIMEPOST.html)
     */
    readonly MIMEPOST: 'MIMEPOST';
    /**
     * Enable .netrc parsing.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NETRC.html](https://curl.haxx.se/libcurl/c/CURLOPT_NETRC.html)
     */
    readonly NETRC: 'NETRC';
    /**
     * .netrc file name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NETRC_FILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_NETRC_FILE.html)
     */
    readonly NETRC_FILE: 'NETRC_FILE';
    /**
     * Mode for creating new remote directories.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NEW_DIRECTORY_PERMS.html](https://curl.haxx.se/libcurl/c/CURLOPT_NEW_DIRECTORY_PERMS.html)
     */
    readonly NEW_DIRECTORY_PERMS: 'NEW_DIRECTORY_PERMS';
    /**
     * Mode for creating new remote files.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NEW_FILE_PERMS.html](https://curl.haxx.se/libcurl/c/CURLOPT_NEW_FILE_PERMS.html)
     */
    readonly NEW_FILE_PERMS: 'NEW_FILE_PERMS';
    /**
     * Do not get the body contents.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NOBODY.html](https://curl.haxx.se/libcurl/c/CURLOPT_NOBODY.html)
     */
    readonly NOBODY: 'NOBODY';
    /**
     * Shut off the progress meter.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NOPROGRESS.html](https://curl.haxx.se/libcurl/c/CURLOPT_NOPROGRESS.html)
     */
    readonly NOPROGRESS: 'NOPROGRESS';
    /**
     * Filter out hosts from proxy use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NOPROXY.html](https://curl.haxx.se/libcurl/c/CURLOPT_NOPROXY.html)
     */
    readonly NOPROXY: 'NOPROXY';
    /**
     * Do not install signal handlers.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NOSIGNAL.html](https://curl.haxx.se/libcurl/c/CURLOPT_NOSIGNAL.html)
     */
    readonly NOSIGNAL: 'NOSIGNAL';
    /**
     * Password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PASSWORD.html](https://curl.haxx.se/libcurl/c/CURLOPT_PASSWORD.html)
     */
    readonly PASSWORD: 'PASSWORD';
    /**
     * Disable squashing /../ and /./ sequences in the path.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PATH_AS_IS.html](https://curl.haxx.se/libcurl/c/CURLOPT_PATH_AS_IS.html)
     */
    readonly PATH_AS_IS: 'PATH_AS_IS';
    /**
     * Set pinned SSL public key .
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PINNEDPUBLICKEY.html](https://curl.haxx.se/libcurl/c/CURLOPT_PINNEDPUBLICKEY.html)
     */
    readonly PINNEDPUBLICKEY: 'PINNEDPUBLICKEY';
    /**
     * Wait on connection to pipeline on it.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PIPEWAIT.html](https://curl.haxx.se/libcurl/c/CURLOPT_PIPEWAIT.html)
     */
    readonly PIPEWAIT: 'PIPEWAIT';
    /**
     * Port number to connect to.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PORT.html](https://curl.haxx.se/libcurl/c/CURLOPT_PORT.html)
     */
    readonly PORT: 'PORT';
    /**
     * Issue an HTTP POST request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_POST.html](https://curl.haxx.se/libcurl/c/CURLOPT_POST.html)
     */
    readonly POST: 'POST';
    /**
     * Send a POST with this data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_POSTFIELDS.html](https://curl.haxx.se/libcurl/c/CURLOPT_POSTFIELDS.html)
     */
    readonly POSTFIELDS: 'POSTFIELDS';
    /**
     * The POST data is this big.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_POSTFIELDSIZE.html](https://curl.haxx.se/libcurl/c/CURLOPT_POSTFIELDSIZE.html)
     */
    readonly POSTFIELDSIZE: 'POSTFIELDSIZE';
    /**
     * The POST data is this big.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_POSTFIELDSIZE_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_POSTFIELDSIZE_LARGE.html)
     */
    readonly POSTFIELDSIZE_LARGE: 'POSTFIELDSIZE_LARGE';
    /**
     * Commands to run after transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_POSTQUOTE.html](https://curl.haxx.se/libcurl/c/CURLOPT_POSTQUOTE.html)
     */
    readonly POSTQUOTE: 'POSTQUOTE';
    /**
     * How to act on redirects after POST.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_POSTREDIR.html](https://curl.haxx.se/libcurl/c/CURLOPT_POSTREDIR.html)
     */
    readonly POSTREDIR: 'POSTREDIR';
    /**
     * Socks proxy to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PRE_PROXY.html](https://curl.haxx.se/libcurl/c/CURLOPT_PRE_PROXY.html)
     */
    readonly PRE_PROXY: 'PRE_PROXY';
    /**
     * Commands to run just before transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PREQUOTE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PREQUOTE.html)
     */
    readonly PREQUOTE: 'PREQUOTE';
    /**
     * Data pointer to pass to the CURLOPT_PREREQFUNCTION callback.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PREREQDATA.html](https://curl.haxx.se/libcurl/c/CURLOPT_PREREQDATA.html)
     */
    readonly PREREQDATA: 'PREREQDATA';
    /**
     * Callback to be called after a connection is established but before a request is made on that connection.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PREREQFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_PREREQFUNCTION.html)
     */
    readonly PREREQFUNCTION: 'PREREQFUNCTION';
    /**
     * OBSOLETE callback for progress meter.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROGRESSFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROGRESSFUNCTION.html)
     */
    readonly PROGRESSFUNCTION: 'PROGRESSFUNCTION';
    /**
     * Allowed protocols.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROTOCOLS.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROTOCOLS.html)
     */
    readonly PROTOCOLS: 'PROTOCOLS';
    /**
     * Proxy to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY.html)
     */
    readonly PROXY: 'PROXY';
    /**
     * Proxy CA cert bundle.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CAINFO.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CAINFO.html)
     */
    readonly PROXY_CAINFO: 'PROXY_CAINFO';
    /**
     * Proxy CA cert bundle memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CAINFO_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CAINFO_BLOB.html)
     */
    readonly PROXY_CAINFO_BLOB: 'PROXY_CAINFO_BLOB';
    /**
     * Path to proxy CA cert bundle.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CAPATH.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CAPATH.html)
     */
    readonly PROXY_CAPATH: 'PROXY_CAPATH';
    /**
     * Proxy Certificate Revocation List.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CRLFILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CRLFILE.html)
     */
    readonly PROXY_CRLFILE: 'PROXY_CRLFILE';
    /**
     * Proxy issuer certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_ISSUERCERT.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_ISSUERCERT.html)
     */
    readonly PROXY_ISSUERCERT: 'PROXY_ISSUERCERT';
    /**
     * Proxy issuer certificate memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_ISSUERCERT_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_ISSUERCERT_BLOB.html)
     */
    readonly PROXY_ISSUERCERT_BLOB: 'PROXY_ISSUERCERT_BLOB';
    /**
     * Proxy client key password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_KEYPASSWD.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_KEYPASSWD.html)
     */
    readonly PROXY_KEYPASSWD: 'PROXY_KEYPASSWD';
    /**
     * Set the proxy's pinned SSL public key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_PINNEDPUBLICKEY.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_PINNEDPUBLICKEY.html)
     */
    readonly PROXY_PINNEDPUBLICKEY: 'PROXY_PINNEDPUBLICKEY';
    /**
     * Proxy authentication service name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SERVICE_NAME.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SERVICE_NAME.html)
     */
    readonly PROXY_SERVICE_NAME: 'PROXY_SERVICE_NAME';
    /**
     * Proxy ciphers to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_CIPHER_LIST.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_CIPHER_LIST.html)
     */
    readonly PROXY_SSL_CIPHER_LIST: 'PROXY_SSL_CIPHER_LIST';
    /**
     * Control proxy SSL behavior.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_OPTIONS.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_OPTIONS.html)
     */
    readonly PROXY_SSL_OPTIONS: 'PROXY_SSL_OPTIONS';
    /**
     * Verify the host name in the proxy SSL certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_VERIFYHOST.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_VERIFYHOST.html)
     */
    readonly PROXY_SSL_VERIFYHOST: 'PROXY_SSL_VERIFYHOST';
    /**
     * Verify the proxy SSL certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_VERIFYPEER.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_VERIFYPEER.html)
     */
    readonly PROXY_SSL_VERIFYPEER: 'PROXY_SSL_VERIFYPEER';
    /**
     * Proxy client cert.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLCERT.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLCERT.html)
     */
    readonly PROXY_SSLCERT: 'PROXY_SSLCERT';
    /**
     * Proxy client cert memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLCERT_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLCERT_BLOB.html)
     */
    readonly PROXY_SSLCERT_BLOB: 'PROXY_SSLCERT_BLOB';
    /**
     * Proxy client cert type.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLCERTTYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLCERTTYPE.html)
     */
    readonly PROXY_SSLCERTTYPE: 'PROXY_SSLCERTTYPE';
    /**
     * Proxy client key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLKEY.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLKEY.html)
     */
    readonly PROXY_SSLKEY: 'PROXY_SSLKEY';
    /**
     * Proxy client key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLKEY_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLKEY_BLOB.html)
     */
    readonly PROXY_SSLKEY_BLOB: 'PROXY_SSLKEY_BLOB';
    /**
     * Proxy client key type.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLKEYTYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLKEYTYPE.html)
     */
    readonly PROXY_SSLKEYTYPE: 'PROXY_SSLKEYTYPE';
    /**
     * Proxy SSL version to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLVERSION.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLVERSION.html)
     */
    readonly PROXY_SSLVERSION: 'PROXY_SSLVERSION';
    /**
     * Proxy TLS 1.3 cipher suites to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLS13_CIPHERS.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLS13_CIPHERS.html)
     */
    readonly PROXY_TLS13_CIPHERS: 'PROXY_TLS13_CIPHERS';
    /**
     * Proxy TLS authentication password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_PASSWORD.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_PASSWORD.html)
     */
    readonly PROXY_TLSAUTH_PASSWORD: 'PROXY_TLSAUTH_PASSWORD';
    /**
     * Proxy TLS authentication methods.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_TYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_TYPE.html)
     */
    readonly PROXY_TLSAUTH_TYPE: 'PROXY_TLSAUTH_TYPE';
    /**
     * Proxy TLS authentication user name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_USERNAME.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_USERNAME.html)
     */
    readonly PROXY_TLSAUTH_USERNAME: 'PROXY_TLSAUTH_USERNAME';
    /**
     * Add transfer mode to URL over proxy.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TRANSFER_MODE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TRANSFER_MODE.html)
     */
    readonly PROXY_TRANSFER_MODE: 'PROXY_TRANSFER_MODE';
    /**
     * HTTP proxy authentication methods.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYAUTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYAUTH.html)
     */
    readonly PROXYAUTH: 'PROXYAUTH';
    /**
     * Custom HTTP headers sent to proxy.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYHEADER.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYHEADER.html)
     */
    readonly PROXYHEADER: 'PROXYHEADER';
    /**
     * Proxy password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYPASSWORD.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYPASSWORD.html)
     */
    readonly PROXYPASSWORD: 'PROXYPASSWORD';
    /**
     * Proxy port to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYPORT.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYPORT.html)
     */
    readonly PROXYPORT: 'PROXYPORT';
    /**
     * Proxy type.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYTYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYTYPE.html)
     */
    readonly PROXYTYPE: 'PROXYTYPE';
    /**
     * Proxy user name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYUSERNAME.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYUSERNAME.html)
     */
    readonly PROXYUSERNAME: 'PROXYUSERNAME';
    /**
     * Proxy user name and password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYUSERPWD.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYUSERPWD.html)
     */
    readonly PROXYUSERPWD: 'PROXYUSERPWD';
    /**
     * Issue an HTTP PUT request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PUT.html](https://curl.haxx.se/libcurl/c/CURLOPT_PUT.html)
     */
    readonly PUT: 'PUT';
    /**
     * Commands to run before transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_QUOTE.html](https://curl.haxx.se/libcurl/c/CURLOPT_QUOTE.html)
     */
    readonly QUOTE: 'QUOTE';
    /**
     * Provide source for entropy random data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RANDOM_FILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_RANDOM_FILE.html)
     */
    readonly RANDOM_FILE: 'RANDOM_FILE';
    /**
     * Range requests.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RANGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_RANGE.html)
     */
    readonly RANGE: 'RANGE';
    /**
     * Data pointer to pass to the read callback.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_READDATA.html](https://curl.haxx.se/libcurl/c/CURLOPT_READDATA.html)
     */
    readonly READDATA: 'READDATA';
    /**
     * Callback for reading data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_READFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_READFUNCTION.html)
     */
    readonly READFUNCTION: 'READFUNCTION';
    /**
     * Protocols to allow redirects to.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_REDIR_PROTOCOLS.html](https://curl.haxx.se/libcurl/c/CURLOPT_REDIR_PROTOCOLS.html)
     */
    readonly REDIR_PROTOCOLS: 'REDIR_PROTOCOLS';
    /**
     * Referer: header.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_REFERER.html](https://curl.haxx.se/libcurl/c/CURLOPT_REFERER.html)
     */
    readonly REFERER: 'REFERER';
    /**
     * Set the request target.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_REQUEST_TARGET.html](https://curl.haxx.se/libcurl/c/CURLOPT_REQUEST_TARGET.html)
     */
    readonly REQUEST_TARGET: 'REQUEST_TARGET';
    /**
     * Provide fixed/fake name resolves.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RESOLVE.html](https://curl.haxx.se/libcurl/c/CURLOPT_RESOLVE.html)
     */
    readonly RESOLVE: 'RESOLVE';
    /**
     * Resume a transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RESUME_FROM.html](https://curl.haxx.se/libcurl/c/CURLOPT_RESUME_FROM.html)
     */
    readonly RESUME_FROM: 'RESUME_FROM';
    /**
     * Resume a transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RESUME_FROM_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_RESUME_FROM_LARGE.html)
     */
    readonly RESUME_FROM_LARGE: 'RESUME_FROM_LARGE';
    /**
     * Client CSEQ number.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_CLIENT_CSEQ.html](https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_CLIENT_CSEQ.html)
     */
    readonly RTSP_CLIENT_CSEQ: 'RTSP_CLIENT_CSEQ';
    /**
     * RTSP request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_REQUEST.html](https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_REQUEST.html)
     */
    readonly RTSP_REQUEST: 'RTSP_REQUEST';
    /**
     * CSEQ number for RTSP Server-\>Client request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_SERVER_CSEQ.html](https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_SERVER_CSEQ.html)
     */
    readonly RTSP_SERVER_CSEQ: 'RTSP_SERVER_CSEQ';
    /**
     * RTSP session-id.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_SESSION_ID.html](https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_SESSION_ID.html)
     */
    readonly RTSP_SESSION_ID: 'RTSP_SESSION_ID';
    /**
     * RTSP stream URI.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_STREAM_URI.html](https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_STREAM_URI.html)
     */
    readonly RTSP_STREAM_URI: 'RTSP_STREAM_URI';
    /**
     * RTSP Transport: header.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_TRANSPORT.html](https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_TRANSPORT.html)
     */
    readonly RTSP_TRANSPORT: 'RTSP_TRANSPORT';
    /**
     * SASL authorization identity (identity to act as).
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SASL_AUTHZID.html](https://curl.haxx.se/libcurl/c/CURLOPT_SASL_AUTHZID.html)
     */
    readonly SASL_AUTHZID: 'SASL_AUTHZID';
    /**
     * Enable SASL initial response.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SASL_IR.html](https://curl.haxx.se/libcurl/c/CURLOPT_SASL_IR.html)
     */
    readonly SASL_IR: 'SASL_IR';
    /**
     * Callback for seek operations.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SEEKFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_SEEKFUNCTION.html)
     */
    readonly SEEKFUNCTION: 'SEEKFUNCTION';
    /**
     * Authentication service name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SERVICE_NAME.html](https://curl.haxx.se/libcurl/c/CURLOPT_SERVICE_NAME.html)
     */
    readonly SERVICE_NAME: 'SERVICE_NAME';
    /**
     * Share object to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SHARE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SHARE.html)
     */
    readonly SHARE: 'SHARE';
    /**
     * Socks5 authentication methods.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SOCKS5_AUTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_SOCKS5_AUTH.html)
     */
    readonly SOCKS5_AUTH: 'SOCKS5_AUTH';
    /**
     * Socks5 GSSAPI NEC mode.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SOCKS5_GSSAPI_NEC.html](https://curl.haxx.se/libcurl/c/CURLOPT_SOCKS5_GSSAPI_NEC.html)
     */
    readonly SOCKS5_GSSAPI_NEC: 'SOCKS5_GSSAPI_NEC';
    /**
     * Socks5 GSSAPI service name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SOCKS5_GSSAPI_SERVICE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SOCKS5_GSSAPI_SERVICE.html)
     */
    readonly SOCKS5_GSSAPI_SERVICE: 'SOCKS5_GSSAPI_SERVICE';
    /**
     * SSH authentication types.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_AUTH_TYPES.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_AUTH_TYPES.html)
     */
    readonly SSH_AUTH_TYPES: 'SSH_AUTH_TYPES';
    /**
     * Enable SSH compression.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_COMPRESSION.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_COMPRESSION.html)
     */
    readonly SSH_COMPRESSION: 'SSH_COMPRESSION';
    /**
     * MD5 of host's public key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_HOST_PUBLIC_KEY_MD5.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_HOST_PUBLIC_KEY_MD5.html)
     */
    readonly SSH_HOST_PUBLIC_KEY_MD5: 'SSH_HOST_PUBLIC_KEY_MD5';
    /**
     * SHA256 of host's public key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_HOST_PUBLIC_KEY_SHA256.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_HOST_PUBLIC_KEY_SHA256.html)
     */
    readonly SSH_HOST_PUBLIC_KEY_SHA256: 'SSH_HOST_PUBLIC_KEY_SHA256';
    /**
     * File name with known hosts.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_KNOWNHOSTS.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_KNOWNHOSTS.html)
     */
    readonly SSH_KNOWNHOSTS: 'SSH_KNOWNHOSTS';
    /**
     * File name of private key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_PRIVATE_KEYFILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_PRIVATE_KEYFILE.html)
     */
    readonly SSH_PRIVATE_KEYFILE: 'SSH_PRIVATE_KEYFILE';
    /**
     * File name of public key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_PUBLIC_KEYFILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_PUBLIC_KEYFILE.html)
     */
    readonly SSH_PUBLIC_KEYFILE: 'SSH_PUBLIC_KEYFILE';
    /**
     * Ciphers to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_CIPHER_LIST.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_CIPHER_LIST.html)
     */
    readonly SSL_CIPHER_LIST: 'SSL_CIPHER_LIST';
    /**
     * Set key exchange curves.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_EC_CURVES.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_EC_CURVES.html)
     */
    readonly SSL_EC_CURVES: 'SSL_EC_CURVES';
    /**
     * Enable use of ALPN.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_ENABLE_ALPN.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_ENABLE_ALPN.html)
     */
    readonly SSL_ENABLE_ALPN: 'SSL_ENABLE_ALPN';
    /**
     * Enable use of NPN.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_ENABLE_NPN.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_ENABLE_NPN.html)
     */
    readonly SSL_ENABLE_NPN: 'SSL_ENABLE_NPN';
    /**
     * Enable TLS False Start.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_FALSESTART.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_FALSESTART.html)
     */
    readonly SSL_FALSESTART: 'SSL_FALSESTART';
    /**
     * Control SSL behavior.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_OPTIONS.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_OPTIONS.html)
     */
    readonly SSL_OPTIONS: 'SSL_OPTIONS';
    /**
     * Disable SSL session-id cache.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_SESSIONID_CACHE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_SESSIONID_CACHE.html)
     */
    readonly SSL_SESSIONID_CACHE: 'SSL_SESSIONID_CACHE';
    /**
     * Verify the host name in the SSL certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYHOST.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYHOST.html)
     */
    readonly SSL_VERIFYHOST: 'SSL_VERIFYHOST';
    /**
     * Verify the SSL certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYPEER.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYPEER.html)
     */
    readonly SSL_VERIFYPEER: 'SSL_VERIFYPEER';
    /**
     * Verify the SSL certificate's status.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYSTATUS.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYSTATUS.html)
     */
    readonly SSL_VERIFYSTATUS: 'SSL_VERIFYSTATUS';
    /**
     * Client cert.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERT.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERT.html)
     */
    readonly SSLCERT: 'SSLCERT';
    /**
     * Client cert memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERT_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERT_BLOB.html)
     */
    readonly SSLCERT_BLOB: 'SSLCERT_BLOB';
    /**
     * Client cert type.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERTTYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERTTYPE.html)
     */
    readonly SSLCERTTYPE: 'SSLCERTTYPE';
    /**
     * Use identifier with SSL engine.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLENGINE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLENGINE.html)
     */
    readonly SSLENGINE: 'SSLENGINE';
    /**
     * Default SSL engine.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLENGINE_DEFAULT.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLENGINE_DEFAULT.html)
     */
    readonly SSLENGINE_DEFAULT: 'SSLENGINE_DEFAULT';
    /**
     * Client key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLKEY.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLKEY.html)
     */
    readonly SSLKEY: 'SSLKEY';
    /**
     * Client key memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLKEY_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLKEY_BLOB.html)
     */
    readonly SSLKEY_BLOB: 'SSLKEY_BLOB';
    /**
     * Client key type.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLKEYTYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLKEYTYPE.html)
     */
    readonly SSLKEYTYPE: 'SSLKEYTYPE';
    /**
     * SSL version to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLVERSION.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLVERSION.html)
     */
    readonly SSLVERSION: 'SSLVERSION';
    /**
     * Suppress proxy CONNECT response headers from user callbacks.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SUPPRESS_CONNECT_HEADERS.html](https://curl.haxx.se/libcurl/c/CURLOPT_SUPPRESS_CONNECT_HEADERS.html)
     */
    readonly SUPPRESS_CONNECT_HEADERS: 'SUPPRESS_CONNECT_HEADERS';
    /**
     * Enable TFO, TCP Fast Open.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TCP_FASTOPEN.html](https://curl.haxx.se/libcurl/c/CURLOPT_TCP_FASTOPEN.html)
     */
    readonly TCP_FASTOPEN: 'TCP_FASTOPEN';
    /**
     * Enable TCP keep-alive.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPALIVE.html](https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPALIVE.html)
     */
    readonly TCP_KEEPALIVE: 'TCP_KEEPALIVE';
    /**
     * Idle time before sending keep-alive.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPIDLE.html](https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPIDLE.html)
     */
    readonly TCP_KEEPIDLE: 'TCP_KEEPIDLE';
    /**
     * Interval between keep-alive probes.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPINTVL.html](https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPINTVL.html)
     */
    readonly TCP_KEEPINTVL: 'TCP_KEEPINTVL';
    /**
     * Disable the Nagle algorithm.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TCP_NODELAY.html](https://curl.haxx.se/libcurl/c/CURLOPT_TCP_NODELAY.html)
     */
    readonly TCP_NODELAY: 'TCP_NODELAY';
    /**
     * TELNET options.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TELNETOPTIONS.html](https://curl.haxx.se/libcurl/c/CURLOPT_TELNETOPTIONS.html)
     */
    readonly TELNETOPTIONS: 'TELNETOPTIONS';
    /**
     * TFTP block size.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TFTP_BLKSIZE.html](https://curl.haxx.se/libcurl/c/CURLOPT_TFTP_BLKSIZE.html)
     */
    readonly TFTP_BLKSIZE: 'TFTP_BLKSIZE';
    /**
     * Do not send TFTP options requests.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TFTP_NO_OPTIONS.html](https://curl.haxx.se/libcurl/c/CURLOPT_TFTP_NO_OPTIONS.html)
     */
    readonly TFTP_NO_OPTIONS: 'TFTP_NO_OPTIONS';
    /**
     * Make a time conditional request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TIMECONDITION.html](https://curl.haxx.se/libcurl/c/CURLOPT_TIMECONDITION.html)
     */
    readonly TIMECONDITION: 'TIMECONDITION';
    /**
     * Timeout for the entire request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TIMEOUT.html](https://curl.haxx.se/libcurl/c/CURLOPT_TIMEOUT.html)
     */
    readonly TIMEOUT: 'TIMEOUT';
    /**
     * Millisecond timeout for the entire request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TIMEOUT_MS.html](https://curl.haxx.se/libcurl/c/CURLOPT_TIMEOUT_MS.html)
     */
    readonly TIMEOUT_MS: 'TIMEOUT_MS';
    /**
     * Time value for the time conditional request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TIMEVALUE.html](https://curl.haxx.se/libcurl/c/CURLOPT_TIMEVALUE.html)
     */
    readonly TIMEVALUE: 'TIMEVALUE';
    /**
     * Time value for the time conditional request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TIMEVALUE_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_TIMEVALUE_LARGE.html)
     */
    readonly TIMEVALUE_LARGE: 'TIMEVALUE_LARGE';
    /**
     * TLS 1.3 cipher suites to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TLS13_CIPHERS.html](https://curl.haxx.se/libcurl/c/CURLOPT_TLS13_CIPHERS.html)
     */
    readonly TLS13_CIPHERS: 'TLS13_CIPHERS';
    /**
     * TLS authentication password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_PASSWORD.html](https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_PASSWORD.html)
     */
    readonly TLSAUTH_PASSWORD: 'TLSAUTH_PASSWORD';
    /**
     * TLS authentication methods.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_TYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_TYPE.html)
     */
    readonly TLSAUTH_TYPE: 'TLSAUTH_TYPE';
    /**
     * TLS authentication user name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_USERNAME.html](https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_USERNAME.html)
     */
    readonly TLSAUTH_USERNAME: 'TLSAUTH_USERNAME';
    /**
     * Set callback for sending trailing headers.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TRAILERFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_TRAILERFUNCTION.html)
     */
    readonly TRAILERFUNCTION: 'TRAILERFUNCTION';
    /**
     * Request Transfer-Encoding.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TRANSFER_ENCODING.html](https://curl.haxx.se/libcurl/c/CURLOPT_TRANSFER_ENCODING.html)
     */
    readonly TRANSFER_ENCODING: 'TRANSFER_ENCODING';
    /**
     * Use text transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TRANSFERTEXT.html](https://curl.haxx.se/libcurl/c/CURLOPT_TRANSFERTEXT.html)
     */
    readonly TRANSFERTEXT: 'TRANSFERTEXT';
    /**
     * Path to a Unix domain socket.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_UNIX_SOCKET_PATH.html](https://curl.haxx.se/libcurl/c/CURLOPT_UNIX_SOCKET_PATH.html)
     */
    readonly UNIX_SOCKET_PATH: 'UNIX_SOCKET_PATH';
    /**
     * Do not restrict authentication to original host.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_UNRESTRICTED_AUTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_UNRESTRICTED_AUTH.html)
     */
    readonly UNRESTRICTED_AUTH: 'UNRESTRICTED_AUTH';
    /**
     * Sets the interval at which connection upkeep are performed.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_UPKEEP_INTERVAL_MS.html](https://curl.haxx.se/libcurl/c/CURLOPT_UPKEEP_INTERVAL_MS.html)
     */
    readonly UPKEEP_INTERVAL_MS: 'UPKEEP_INTERVAL_MS';
    /**
     * Upload data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_UPLOAD.html](https://curl.haxx.se/libcurl/c/CURLOPT_UPLOAD.html)
     */
    readonly UPLOAD: 'UPLOAD';
    /**
     * Set upload buffer size.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_UPLOAD_BUFFERSIZE.html](https://curl.haxx.se/libcurl/c/CURLOPT_UPLOAD_BUFFERSIZE.html)
     */
    readonly UPLOAD_BUFFERSIZE: 'UPLOAD_BUFFERSIZE';
    /**
     * URL to work on.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_URL.html](https://curl.haxx.se/libcurl/c/CURLOPT_URL.html)
     */
    readonly URL: 'URL';
    /**
     * Use TLS/SSL.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_USE_SSL.html](https://curl.haxx.se/libcurl/c/CURLOPT_USE_SSL.html)
     */
    readonly USE_SSL: 'USE_SSL';
    /**
     * User-Agent: header.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_USERAGENT.html](https://curl.haxx.se/libcurl/c/CURLOPT_USERAGENT.html)
     */
    readonly USERAGENT: 'USERAGENT';
    /**
     * User name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_USERNAME.html](https://curl.haxx.se/libcurl/c/CURLOPT_USERNAME.html)
     */
    readonly USERNAME: 'USERNAME';
    /**
     * User name and password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_USERPWD.html](https://curl.haxx.se/libcurl/c/CURLOPT_USERPWD.html)
     */
    readonly USERPWD: 'USERPWD';
    /**
     * Display verbose information.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_VERBOSE.html](https://curl.haxx.se/libcurl/c/CURLOPT_VERBOSE.html)
     */
    readonly VERBOSE: 'VERBOSE';
    /**
     * Transfer multiple files according to a file name pattern.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_WILDCARDMATCH.html](https://curl.haxx.se/libcurl/c/CURLOPT_WILDCARDMATCH.html)
     */
    readonly WILDCARDMATCH: 'WILDCARDMATCH';
    /**
     * Callback for writing data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_WRITEFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_WRITEFUNCTION.html)
     */
    readonly WRITEFUNCTION: 'WRITEFUNCTION';
    /**
     * Callback for progress meter.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_XFERINFOFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_XFERINFOFUNCTION.html)
     */
    readonly XFERINFOFUNCTION: 'XFERINFOFUNCTION';
    /**
     * OAuth2 bearer token.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_XOAUTH2_BEARER.html](https://curl.haxx.se/libcurl/c/CURLOPT_XOAUTH2_BEARER.html)
     */
    readonly XOAUTH2_BEARER: 'XOAUTH2_BEARER';
    /**
     * (curl-impersonate) SSL Compression type. Eg. brotli
     *
     * Official libcurl documentation: : [https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L125](https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L125)
     */
    readonly SSL_COMPRESSION: 'SSL_COMPRESSION';
    /**
     * (curl-impersonate) TLS Client hello match Extension
     *
     * Official libcurl documentation: : [https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L119](https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L119)
     */
    readonly SSL_ENABLE_ALPS: 'SSL_ENABLE_ALPS';
}
export declare const CurlOptionCamelCaseMap: {
    /**
     * Path to an abstract Unix domain socket.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ABSTRACT_UNIX_SOCKET.html](https://curl.haxx.se/libcurl/c/CURLOPT_ABSTRACT_UNIX_SOCKET.html)
     */
    readonly abstractUnixSocket: "ABSTRACT_UNIX_SOCKET";
    /**
     * Accept-Encoding and automatic decompressing data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ACCEPT_ENCODING.html](https://curl.haxx.se/libcurl/c/CURLOPT_ACCEPT_ENCODING.html)
     */
    readonly acceptEncoding: "ACCEPT_ENCODING";
    /**
     * Timeout for waiting for the server's connect back to be accepted.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ACCEPTTIMEOUT_MS.html](https://curl.haxx.se/libcurl/c/CURLOPT_ACCEPTTIMEOUT_MS.html)
     */
    readonly acceptTimeoutMs: "ACCEPTTIMEOUT_MS";
    /**
     * IPv6 scope for local addresses.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ADDRESS_SCOPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_ADDRESS_SCOPE.html)
     */
    readonly addressScope: "ADDRESS_SCOPE";
    /**
     * Specify the Alt-Svc: cache file name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ALTSVC.html](https://curl.haxx.se/libcurl/c/CURLOPT_ALTSVC.html)
     */
    readonly altSvc: "ALTSVC";
    /**
     * Enable and configure Alt-Svc: treatment.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ALTSVC_CTRL.html](https://curl.haxx.se/libcurl/c/CURLOPT_ALTSVC_CTRL.html)
     */
    readonly altSvcCtrl: "ALTSVC_CTRL";
    /**
     * Append to remote file.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_APPEND.html](https://curl.haxx.se/libcurl/c/CURLOPT_APPEND.html)
     */
    readonly append: "APPEND";
    /**
     * Automatically set Referer: header.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_AUTOREFERER.html](https://curl.haxx.se/libcurl/c/CURLOPT_AUTOREFERER.html)
     */
    readonly autoReferer: "AUTOREFERER";
    /**
     * AWS HTTP V4 Signature.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_AWS_SIGV4.html](https://curl.haxx.se/libcurl/c/CURLOPT_AWS_SIGV4.html)
     */
    readonly awsSigV4: "AWS_SIGV4";
    /**
     * Ask for alternate buffer size.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_BUFFERSIZE.html](https://curl.haxx.se/libcurl/c/CURLOPT_BUFFERSIZE.html)
     */
    readonly bufferSize: "BUFFERSIZE";
    /**
     * CA cert bundle.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CAINFO.html](https://curl.haxx.se/libcurl/c/CURLOPT_CAINFO.html)
     */
    readonly caInfo: "CAINFO";
    /**
     * CA cert bundle memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CAINFO_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_CAINFO_BLOB.html)
     */
    readonly caInfoBlob: "CAINFO_BLOB";
    /**
     * Path to CA cert bundle.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CAPATH.html](https://curl.haxx.se/libcurl/c/CURLOPT_CAPATH.html)
     */
    readonly caPath: "CAPATH";
    /**
     * Extract certificate info.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CERTINFO.html](https://curl.haxx.se/libcurl/c/CURLOPT_CERTINFO.html)
     */
    readonly certInfo: "CERTINFO";
    /**
     * Callback for wildcard download start of chunk.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CHUNK_BGN_FUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_CHUNK_BGN_FUNCTION.html)
     */
    readonly chunkBgnFunction: "CHUNK_BGN_FUNCTION";
    /**
     * Callback for wildcard download end of chunk.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CHUNK_END_FUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_CHUNK_END_FUNCTION.html)
     */
    readonly chunkEndFunction: "CHUNK_END_FUNCTION";
    /**
     * Only connect, nothing else.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CONNECT_ONLY.html](https://curl.haxx.se/libcurl/c/CURLOPT_CONNECT_ONLY.html)
     */
    readonly connectOnly: "CONNECT_ONLY";
    /**
     * Connect to a specific host and port.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CONNECT_TO.html](https://curl.haxx.se/libcurl/c/CURLOPT_CONNECT_TO.html)
     */
    readonly connectTo: "CONNECT_TO";
    /**
     * Timeout for the connection phase.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CONNECTTIMEOUT.html](https://curl.haxx.se/libcurl/c/CURLOPT_CONNECTTIMEOUT.html)
     */
    readonly connectTimeout: "CONNECTTIMEOUT";
    /**
     * Millisecond timeout for the connection phase.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CONNECTTIMEOUT_MS.html](https://curl.haxx.se/libcurl/c/CURLOPT_CONNECTTIMEOUT_MS.html)
     */
    readonly connectTimeoutMs: "CONNECTTIMEOUT_MS";
    /**
     * Cookie(s) to send.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_COOKIE.html](https://curl.haxx.se/libcurl/c/CURLOPT_COOKIE.html)
     */
    readonly cookie: "COOKIE";
    /**
     * File to read cookies from.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_COOKIEFILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_COOKIEFILE.html)
     */
    readonly cookieFile: "COOKIEFILE";
    /**
     * File to write cookies to.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_COOKIEJAR.html](https://curl.haxx.se/libcurl/c/CURLOPT_COOKIEJAR.html)
     */
    readonly cookieJar: "COOKIEJAR";
    /**
     * Add or control cookies.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_COOKIELIST.html](https://curl.haxx.se/libcurl/c/CURLOPT_COOKIELIST.html)
     */
    readonly cookieList: "COOKIELIST";
    /**
     * Start a new cookie session.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_COOKIESESSION.html](https://curl.haxx.se/libcurl/c/CURLOPT_COOKIESESSION.html)
     */
    readonly cookieSession: "COOKIESESSION";
    /**
     * Convert newlines.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CRLF.html](https://curl.haxx.se/libcurl/c/CURLOPT_CRLF.html)
     */
    readonly crlf: "CRLF";
    /**
     * Certificate Revocation List.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CRLFILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_CRLFILE.html)
     */
    readonly crlFile: "CRLFILE";
    /**
     * Custom request/method.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CUSTOMREQUEST.html](https://curl.haxx.se/libcurl/c/CURLOPT_CUSTOMREQUEST.html)
     */
    readonly customRequest: "CUSTOMREQUEST";
    /**
     * Callback for debug information.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DEBUGFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_DEBUGFUNCTION.html)
     */
    readonly debugFunction: "DEBUGFUNCTION";
    /**
     * Default protocol.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DEFAULT_PROTOCOL.html](https://curl.haxx.se/libcurl/c/CURLOPT_DEFAULT_PROTOCOL.html)
     */
    readonly defaultProtocol: "DEFAULT_PROTOCOL";
    /**
     * List only.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DIRLISTONLY.html](https://curl.haxx.se/libcurl/c/CURLOPT_DIRLISTONLY.html)
     */
    readonly dirListOnly: "DIRLISTONLY";
    /**
     * Do not allow username in URL.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DISALLOW_USERNAME_IN_URL.html](https://curl.haxx.se/libcurl/c/CURLOPT_DISALLOW_USERNAME_IN_URL.html)
     */
    readonly disallowUsernameInUrl: "DISALLOW_USERNAME_IN_URL";
    /**
     * Timeout for DNS cache.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_CACHE_TIMEOUT.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_CACHE_TIMEOUT.html)
     */
    readonly dnsCacheTimeout: "DNS_CACHE_TIMEOUT";
    /**
     * Bind name resolves to this interface.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_INTERFACE.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_INTERFACE.html)
     */
    readonly dnsInterface: "DNS_INTERFACE";
    /**
     * Bind name resolves to this IP4 address.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_LOCAL_IP4.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_LOCAL_IP4.html)
     */
    readonly dnsLocalIp4: "DNS_LOCAL_IP4";
    /**
     * Bind name resolves to this IP6 address.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_LOCAL_IP6.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_LOCAL_IP6.html)
     */
    readonly dnsLocalIp6: "DNS_LOCAL_IP6";
    /**
     * Preferred DNS servers.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_SERVERS.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_SERVERS.html)
     */
    readonly dnsServers: "DNS_SERVERS";
    /**
     * Shuffle addresses before use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_SHUFFLE_ADDRESSES.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_SHUFFLE_ADDRESSES.html)
     */
    readonly dnsShuffleAddresses: "DNS_SHUFFLE_ADDRESSES";
    /**
     * OBSOLETE Enable global DNS cache.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_USE_GLOBAL_CACHE.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_USE_GLOBAL_CACHE.html)
     */
    readonly dnsUseGlobalCache: "DNS_USE_GLOBAL_CACHE";
    /**
     * Verify the host name in the DoH (DNS-over-HTTPS) SSL certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DOH_SSL_VERIFYHOST.html](https://curl.haxx.se/libcurl/c/CURLOPT_DOH_SSL_VERIFYHOST.html)
     */
    readonly dohSslVerifyHost: "DOH_SSL_VERIFYHOST";
    /**
     * Verify the DoH (DNS-over-HTTPS) SSL certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DOH_SSL_VERIFYPEER.html](https://curl.haxx.se/libcurl/c/CURLOPT_DOH_SSL_VERIFYPEER.html)
     */
    readonly dohSslVerifyPeer: "DOH_SSL_VERIFYPEER";
    /**
     * Verify the DoH (DNS-over-HTTPS) SSL certificate's status.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DOH_SSL_VERIFYSTATUS.html](https://curl.haxx.se/libcurl/c/CURLOPT_DOH_SSL_VERIFYSTATUS.html)
     */
    readonly dohSslVerifyStatus: "DOH_SSL_VERIFYSTATUS";
    /**
     * Use this DoH server for name resolves.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DOH_URL.html](https://curl.haxx.se/libcurl/c/CURLOPT_DOH_URL.html)
     */
    readonly dohUrl: "DOH_URL";
    /**
     * Identify EGD socket for entropy.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_EGDSOCKET.html](https://curl.haxx.se/libcurl/c/CURLOPT_EGDSOCKET.html)
     */
    readonly egdSocket: "EGDSOCKET";
    /**
     * 100-continue timeout.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_EXPECT_100_TIMEOUT_MS.html](https://curl.haxx.se/libcurl/c/CURLOPT_EXPECT_100_TIMEOUT_MS.html)
     */
    readonly expect100TimeoutMs: "EXPECT_100_TIMEOUT_MS";
    /**
     * Fail on HTTP 4xx errors.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FAILONERROR.html](https://curl.haxx.se/libcurl/c/CURLOPT_FAILONERROR.html)
     */
    readonly failOnError: "FAILONERROR";
    /**
     * Request file modification date and time.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FILETIME.html](https://curl.haxx.se/libcurl/c/CURLOPT_FILETIME.html)
     */
    readonly fileTime: "FILETIME";
    /**
     * Callback for wildcard matching.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FNMATCH_FUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_FNMATCH_FUNCTION.html)
     */
    readonly fnMatchFunction: "FNMATCH_FUNCTION";
    /**
     * Follow HTTP redirects.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FOLLOWLOCATION.html](https://curl.haxx.se/libcurl/c/CURLOPT_FOLLOWLOCATION.html)
     */
    readonly followLocation: "FOLLOWLOCATION";
    /**
     * Prevent subsequent connections from re-using this.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FORBID_REUSE.html](https://curl.haxx.se/libcurl/c/CURLOPT_FORBID_REUSE.html)
     */
    readonly forbIdReuse: "FORBID_REUSE";
    /**
     * Use a new connection.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FRESH_CONNECT.html](https://curl.haxx.se/libcurl/c/CURLOPT_FRESH_CONNECT.html)
     */
    readonly freshConnect: "FRESH_CONNECT";
    /**
     * Send ACCT command.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_ACCOUNT.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_ACCOUNT.html)
     */
    readonly ftpAccount: "FTP_ACCOUNT";
    /**
     * Alternative to USER.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_ALTERNATIVE_TO_USER.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_ALTERNATIVE_TO_USER.html)
     */
    readonly ftpAlternativeToUser: "FTP_ALTERNATIVE_TO_USER";
    /**
     * Create missing directories on the remote server.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_CREATE_MISSING_DIRS.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_CREATE_MISSING_DIRS.html)
     */
    readonly ftpCreateMissingDirs: "FTP_CREATE_MISSING_DIRS";
    /**
     * Specify how to reach files.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_FILEMETHOD.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_FILEMETHOD.html)
     */
    readonly ftpFileMethod: "FTP_FILEMETHOD";
    /**
     * Timeout for FTP responses.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_RESPONSE_TIMEOUT.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_RESPONSE_TIMEOUT.html)
     */
    readonly ftpResponseTimeout: "FTP_RESPONSE_TIMEOUT";
    /**
     * Ignore the IP address in the PASV response.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_SKIP_PASV_IP.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_SKIP_PASV_IP.html)
     */
    readonly ftpSkipPasvIp: "FTP_SKIP_PASV_IP";
    /**
     * Back to non-TLS again after authentication.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_SSL_CCC.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_SSL_CCC.html)
     */
    readonly ftpSslCcc: "FTP_SSL_CCC";
    /**
     * Use EPTR.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_USE_EPRT.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_USE_EPRT.html)
     */
    readonly ftpUseEprt: "FTP_USE_EPRT";
    /**
     * Use EPSV.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_USE_EPSV.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_USE_EPSV.html)
     */
    readonly ftpUseEpsv: "FTP_USE_EPSV";
    /**
     * Use PRET.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_USE_PRET.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_USE_PRET.html)
     */
    readonly ftpUsePret: "FTP_USE_PRET";
    /**
     * Use active FTP.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTPPORT.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTPPORT.html)
     */
    readonly ftpPort: "FTPPORT";
    /**
     * Control how to do TLS.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTPSSLAUTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTPSSLAUTH.html)
     */
    readonly ftpSslAuth: "FTPSSLAUTH";
    /**
     * Disable GSS-API delegation.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_GSSAPI_DELEGATION.html](https://curl.haxx.se/libcurl/c/CURLOPT_GSSAPI_DELEGATION.html)
     */
    readonly gssapiDelegation: "GSSAPI_DELEGATION";
    /**
     * Timeout for happy eyeballs.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HAPPY_EYEBALLS_TIMEOUT_MS.html](https://curl.haxx.se/libcurl/c/CURLOPT_HAPPY_EYEBALLS_TIMEOUT_MS.html)
     */
    readonly happyEyeballsTimeoutMs: "HAPPY_EYEBALLS_TIMEOUT_MS";
    /**
     * Send an HAProxy PROXY protocol v1 header.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HAPROXYPROTOCOL.html](https://curl.haxx.se/libcurl/c/CURLOPT_HAPROXYPROTOCOL.html)
     */
    readonly haProxyProtocol: "HAPROXYPROTOCOL";
    /**
     * Include the header in the body output.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HEADER.html](https://curl.haxx.se/libcurl/c/CURLOPT_HEADER.html)
     */
    readonly header: "HEADER";
    /**
     * Callback for writing received headers.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HEADERFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_HEADERFUNCTION.html)
     */
    readonly headerFunction: "HEADERFUNCTION";
    /**
     * Control custom headers.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HEADEROPT.html](https://curl.haxx.se/libcurl/c/CURLOPT_HEADEROPT.html)
     */
    readonly headerOpt: "HEADEROPT";
    /**
     * Set HSTS cache file.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HSTS.html](https://curl.haxx.se/libcurl/c/CURLOPT_HSTS.html)
     */
    readonly hsts: "HSTS";
    /**
     * Enable HSTS.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HSTS_CTRL.html](https://curl.haxx.se/libcurl/c/CURLOPT_HSTS_CTRL.html)
     */
    readonly hstsCtrl: "HSTS_CTRL";
    /**
     * Set HSTS read callback.
     *
     * You can either return a single `CurlHstsReadCallbackResult` object or an array of `CurlHstsReadCallbackResult` objects.
     * If returning an array, the callback will only be called once per request.
     * If returning a single object, the callback will be called multiple times until `null` is returned.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HSTSREADFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_HSTSREADFUNCTION.html)
     */
    readonly hstsReadFunction: "HSTSREADFUNCTION";
    /**
     * Set HSTS write callback.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HSTSWRITEFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_HSTSWRITEFUNCTION.html)
     */
    readonly hstsWriteFunction: "HSTSWRITEFUNCTION";
    /**
     * Disable Content decoding.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTP_CONTENT_DECODING.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTP_CONTENT_DECODING.html)
     */
    readonly httpContentDecoding: "HTTP_CONTENT_DECODING";
    /**
     * Disable Transfer decoding.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTP_TRANSFER_DECODING.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTP_TRANSFER_DECODING.html)
     */
    readonly httpTransferDecoding: "HTTP_TRANSFER_DECODING";
    /**
     * HTTP version to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTP_VERSION.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTP_VERSION.html)
     */
    readonly httpVersion: "HTTP_VERSION";
    /**
     * Allow HTTP/0.9 responses.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTP09_ALLOWED.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTP09_ALLOWED.html)
     */
    readonly http09Allowed: "HTTP09_ALLOWED";
    /**
     * Alternative versions of 200 OK.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTP200ALIASES.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTP200ALIASES.html)
     */
    readonly http200aliases: "HTTP200ALIASES";
    /**
     * HTTP server authentication methods.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTPAUTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTPAUTH.html)
     */
    readonly httpAuth: "HTTPAUTH";
    /**
     * Do an HTTP GET request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTPGET.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTPGET.html)
     */
    readonly httpGet: "HTTPGET";
    /**
     * Custom HTTP headers.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTPHEADER.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTPHEADER.html)
     */
    readonly httpHeader: "HTTPHEADER";
    /**
     * Multipart formpost HTTP POST.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTPPOST.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTPPOST.html)
     */
    readonly httpPost: "HTTPPOST";
    /**
     * Tunnel through the HTTP proxy.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTPPROXYTUNNEL.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTPPROXYTUNNEL.html)
     */
    readonly httpProxyTunnel: "HTTPPROXYTUNNEL";
    /**
     * Ignore Content-Length.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_IGNORE_CONTENT_LENGTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_IGNORE_CONTENT_LENGTH.html)
     */
    readonly ignoreContentLength: "IGNORE_CONTENT_LENGTH";
    /**
     * Size of file to send.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_INFILESIZE.html](https://curl.haxx.se/libcurl/c/CURLOPT_INFILESIZE.html)
     */
    readonly inFileSize: "INFILESIZE";
    /**
     * Size of file to send.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_INFILESIZE_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_INFILESIZE_LARGE.html)
     */
    readonly inFileSizeLarge: "INFILESIZE_LARGE";
    /**
     * Bind connection locally to this.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_INTERFACE.html](https://curl.haxx.se/libcurl/c/CURLOPT_INTERFACE.html)
     */
    readonly interface: "INTERFACE";
    /**
     * IP version to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_IPRESOLVE.html](https://curl.haxx.se/libcurl/c/CURLOPT_IPRESOLVE.html)
     */
    readonly ipResolve: "IPRESOLVE";
    /**
     * Issuer certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ISSUERCERT.html](https://curl.haxx.se/libcurl/c/CURLOPT_ISSUERCERT.html)
     */
    readonly issuerCert: "ISSUERCERT";
    /**
     * Issuer certificate memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ISSUERCERT_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_ISSUERCERT_BLOB.html)
     */
    readonly issuerCertBlob: "ISSUERCERT_BLOB";
    /**
     * Keep sending on HTTP \>= 300 errors.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_KEEP_SENDING_ON_ERROR.html](https://curl.haxx.se/libcurl/c/CURLOPT_KEEP_SENDING_ON_ERROR.html)
     */
    readonly keepSendingOnError: "KEEP_SENDING_ON_ERROR";
    /**
     * Client key password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_KEYPASSWD.html](https://curl.haxx.se/libcurl/c/CURLOPT_KEYPASSWD.html)
     */
    readonly keyPasswd: "KEYPASSWD";
    /**
     * Kerberos security level.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_KRBLEVEL.html](https://curl.haxx.se/libcurl/c/CURLOPT_KRBLEVEL.html)
     */
    readonly krbLevel: "KRBLEVEL";
    /**
     * Bind connection locally to this port.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_LOCALPORT.html](https://curl.haxx.se/libcurl/c/CURLOPT_LOCALPORT.html)
     */
    readonly localPort: "LOCALPORT";
    /**
     * Bind connection locally to port range.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_LOCALPORTRANGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_LOCALPORTRANGE.html)
     */
    readonly localPortRange: "LOCALPORTRANGE";
    /**
     * Login options.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_LOGIN_OPTIONS.html](https://curl.haxx.se/libcurl/c/CURLOPT_LOGIN_OPTIONS.html)
     */
    readonly loginOptions: "LOGIN_OPTIONS";
    /**
     * Low speed limit to abort transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_LOW_SPEED_LIMIT.html](https://curl.haxx.se/libcurl/c/CURLOPT_LOW_SPEED_LIMIT.html)
     */
    readonly lowSpeedLimit: "LOW_SPEED_LIMIT";
    /**
     * Time to be below the speed to trigger low speed abort.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_LOW_SPEED_TIME.html](https://curl.haxx.se/libcurl/c/CURLOPT_LOW_SPEED_TIME.html)
     */
    readonly lowSpeedTime: "LOW_SPEED_TIME";
    /**
     * Authentication address.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_AUTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_AUTH.html)
     */
    readonly mailAuth: "MAIL_AUTH";
    /**
     * Address of the sender.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_FROM.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_FROM.html)
     */
    readonly mailFrom: "MAIL_FROM";
    /**
     * Address of the recipients.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_RCPT.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_RCPT.html)
     */
    readonly mailRcpt: "MAIL_RCPT";
    /**
     * Allow RCPT TO command to fail for some recipients.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_RCPT_ALLLOWFAILS.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_RCPT_ALLLOWFAILS.html)
     */
    readonly mailRcptAlllowfails: "MAIL_RCPT_ALLLOWFAILS";
    /**
     * Cap the download speed to this.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAX_RECV_SPEED_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAX_RECV_SPEED_LARGE.html)
     */
    readonly maxRecvSpeedLarge: "MAX_RECV_SPEED_LARGE";
    /**
     * Cap the upload speed to this.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAX_SEND_SPEED_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAX_SEND_SPEED_LARGE.html)
     */
    readonly maxSendSpeedLarge: "MAX_SEND_SPEED_LARGE";
    /**
     * Limit the age (idle time) of connections for reuse.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAXAGE_CONN.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAXAGE_CONN.html)
     */
    readonly maxAgeConn: "MAXAGE_CONN";
    /**
     * Maximum number of connections in the connection pool.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAXCONNECTS.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAXCONNECTS.html)
     */
    readonly maxConnects: "MAXCONNECTS";
    /**
     * Maximum file size to get.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAXFILESIZE.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAXFILESIZE.html)
     */
    readonly maxFileSize: "MAXFILESIZE";
    /**
     * Maximum file size to get.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAXFILESIZE_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAXFILESIZE_LARGE.html)
     */
    readonly maxFileSizeLarge: "MAXFILESIZE_LARGE";
    /**
     * Limit the age (since creation) of connections for reuse.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAXLIFETIME_CONN.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAXLIFETIME_CONN.html)
     */
    readonly maxlifeTimeConn: "MAXLIFETIME_CONN";
    /**
     * Maximum number of redirects to follow.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAXREDIRS.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAXREDIRS.html)
     */
    readonly maxRedirs: "MAXREDIRS";
    /**
     * Set MIME option flags.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MIME_OPTIONS.html](https://curl.haxx.se/libcurl/c/CURLOPT_MIME_OPTIONS.html)
     */
    readonly mimeOptions: "MIME_OPTIONS";
    /**
     * Post/send MIME data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MIMEPOST.html](https://curl.haxx.se/libcurl/c/CURLOPT_MIMEPOST.html)
     */
    readonly mimePost: "MIMEPOST";
    /**
     * Enable .netrc parsing.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NETRC.html](https://curl.haxx.se/libcurl/c/CURLOPT_NETRC.html)
     */
    readonly netrc: "NETRC";
    /**
     * .netrc file name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NETRC_FILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_NETRC_FILE.html)
     */
    readonly netrcFile: "NETRC_FILE";
    /**
     * Mode for creating new remote directories.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NEW_DIRECTORY_PERMS.html](https://curl.haxx.se/libcurl/c/CURLOPT_NEW_DIRECTORY_PERMS.html)
     */
    readonly newDirectoryPerms: "NEW_DIRECTORY_PERMS";
    /**
     * Mode for creating new remote files.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NEW_FILE_PERMS.html](https://curl.haxx.se/libcurl/c/CURLOPT_NEW_FILE_PERMS.html)
     */
    readonly newFilePerms: "NEW_FILE_PERMS";
    /**
     * Do not get the body contents.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NOBODY.html](https://curl.haxx.se/libcurl/c/CURLOPT_NOBODY.html)
     */
    readonly nobody: "NOBODY";
    /**
     * Shut off the progress meter.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NOPROGRESS.html](https://curl.haxx.se/libcurl/c/CURLOPT_NOPROGRESS.html)
     */
    readonly noProgress: "NOPROGRESS";
    /**
     * Filter out hosts from proxy use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NOPROXY.html](https://curl.haxx.se/libcurl/c/CURLOPT_NOPROXY.html)
     */
    readonly noProxy: "NOPROXY";
    /**
     * Do not install signal handlers.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NOSIGNAL.html](https://curl.haxx.se/libcurl/c/CURLOPT_NOSIGNAL.html)
     */
    readonly noSignal: "NOSIGNAL";
    /**
     * Password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PASSWORD.html](https://curl.haxx.se/libcurl/c/CURLOPT_PASSWORD.html)
     */
    readonly password: "PASSWORD";
    /**
     * Disable squashing /../ and /./ sequences in the path.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PATH_AS_IS.html](https://curl.haxx.se/libcurl/c/CURLOPT_PATH_AS_IS.html)
     */
    readonly pathAsIs: "PATH_AS_IS";
    /**
     * Set pinned SSL public key .
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PINNEDPUBLICKEY.html](https://curl.haxx.se/libcurl/c/CURLOPT_PINNEDPUBLICKEY.html)
     */
    readonly pinnedPublicKey: "PINNEDPUBLICKEY";
    /**
     * Wait on connection to pipeline on it.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PIPEWAIT.html](https://curl.haxx.se/libcurl/c/CURLOPT_PIPEWAIT.html)
     */
    readonly pipeWait: "PIPEWAIT";
    /**
     * Port number to connect to.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PORT.html](https://curl.haxx.se/libcurl/c/CURLOPT_PORT.html)
     */
    readonly port: "PORT";
    /**
     * Issue an HTTP POST request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_POST.html](https://curl.haxx.se/libcurl/c/CURLOPT_POST.html)
     */
    readonly post: "POST";
    /**
     * Send a POST with this data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_POSTFIELDS.html](https://curl.haxx.se/libcurl/c/CURLOPT_POSTFIELDS.html)
     */
    readonly postFields: "POSTFIELDS";
    /**
     * The POST data is this big.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_POSTFIELDSIZE.html](https://curl.haxx.se/libcurl/c/CURLOPT_POSTFIELDSIZE.html)
     */
    readonly postFieldSize: "POSTFIELDSIZE";
    /**
     * The POST data is this big.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_POSTFIELDSIZE_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_POSTFIELDSIZE_LARGE.html)
     */
    readonly postFieldSizeLarge: "POSTFIELDSIZE_LARGE";
    /**
     * Commands to run after transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_POSTQUOTE.html](https://curl.haxx.se/libcurl/c/CURLOPT_POSTQUOTE.html)
     */
    readonly postQuote: "POSTQUOTE";
    /**
     * How to act on redirects after POST.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_POSTREDIR.html](https://curl.haxx.se/libcurl/c/CURLOPT_POSTREDIR.html)
     */
    readonly postRedir: "POSTREDIR";
    /**
     * Socks proxy to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PRE_PROXY.html](https://curl.haxx.se/libcurl/c/CURLOPT_PRE_PROXY.html)
     */
    readonly preProxy: "PRE_PROXY";
    /**
     * Commands to run just before transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PREQUOTE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PREQUOTE.html)
     */
    readonly preQuote: "PREQUOTE";
    /**
     * Data pointer to pass to the CURLOPT_PREREQFUNCTION callback.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PREREQDATA.html](https://curl.haxx.se/libcurl/c/CURLOPT_PREREQDATA.html)
     */
    readonly prereqData: "PREREQDATA";
    /**
     * Callback to be called after a connection is established but before a request is made on that connection.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PREREQFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_PREREQFUNCTION.html)
     */
    readonly prereqFunction: "PREREQFUNCTION";
    /**
     * OBSOLETE callback for progress meter.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROGRESSFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROGRESSFUNCTION.html)
     */
    readonly progressFunction: "PROGRESSFUNCTION";
    /**
     * Allowed protocols.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROTOCOLS.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROTOCOLS.html)
     */
    readonly protocols: "PROTOCOLS";
    /**
     * Proxy to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY.html)
     */
    readonly proxy: "PROXY";
    /**
     * Proxy CA cert bundle.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CAINFO.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CAINFO.html)
     */
    readonly proxyCaInfo: "PROXY_CAINFO";
    /**
     * Proxy CA cert bundle memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CAINFO_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CAINFO_BLOB.html)
     */
    readonly proxyCaInfoBlob: "PROXY_CAINFO_BLOB";
    /**
     * Path to proxy CA cert bundle.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CAPATH.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CAPATH.html)
     */
    readonly proxyCaPath: "PROXY_CAPATH";
    /**
     * Proxy Certificate Revocation List.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CRLFILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CRLFILE.html)
     */
    readonly proxyCrlFile: "PROXY_CRLFILE";
    /**
     * Proxy issuer certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_ISSUERCERT.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_ISSUERCERT.html)
     */
    readonly proxyIssuerCert: "PROXY_ISSUERCERT";
    /**
     * Proxy issuer certificate memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_ISSUERCERT_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_ISSUERCERT_BLOB.html)
     */
    readonly proxyIssuerCertBlob: "PROXY_ISSUERCERT_BLOB";
    /**
     * Proxy client key password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_KEYPASSWD.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_KEYPASSWD.html)
     */
    readonly proxyKeyPasswd: "PROXY_KEYPASSWD";
    /**
     * Set the proxy's pinned SSL public key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_PINNEDPUBLICKEY.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_PINNEDPUBLICKEY.html)
     */
    readonly proxyPinnedPublicKey: "PROXY_PINNEDPUBLICKEY";
    /**
     * Proxy authentication service name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SERVICE_NAME.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SERVICE_NAME.html)
     */
    readonly proxyServiceName: "PROXY_SERVICE_NAME";
    /**
     * Proxy ciphers to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_CIPHER_LIST.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_CIPHER_LIST.html)
     */
    readonly proxySslCipherList: "PROXY_SSL_CIPHER_LIST";
    /**
     * Control proxy SSL behavior.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_OPTIONS.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_OPTIONS.html)
     */
    readonly proxySslOptions: "PROXY_SSL_OPTIONS";
    /**
     * Verify the host name in the proxy SSL certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_VERIFYHOST.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_VERIFYHOST.html)
     */
    readonly proxySslVerifyHost: "PROXY_SSL_VERIFYHOST";
    /**
     * Verify the proxy SSL certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_VERIFYPEER.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_VERIFYPEER.html)
     */
    readonly proxySslVerifyPeer: "PROXY_SSL_VERIFYPEER";
    /**
     * Proxy client cert.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLCERT.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLCERT.html)
     */
    readonly proxySslCert: "PROXY_SSLCERT";
    /**
     * Proxy client cert memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLCERT_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLCERT_BLOB.html)
     */
    readonly proxySslCertBlob: "PROXY_SSLCERT_BLOB";
    /**
     * Proxy client cert type.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLCERTTYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLCERTTYPE.html)
     */
    readonly proxySslCertType: "PROXY_SSLCERTTYPE";
    /**
     * Proxy client key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLKEY.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLKEY.html)
     */
    readonly proxySslKey: "PROXY_SSLKEY";
    /**
     * Proxy client key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLKEY_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLKEY_BLOB.html)
     */
    readonly proxySslKeyBlob: "PROXY_SSLKEY_BLOB";
    /**
     * Proxy client key type.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLKEYTYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLKEYTYPE.html)
     */
    readonly proxySslKeyType: "PROXY_SSLKEYTYPE";
    /**
     * Proxy SSL version to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLVERSION.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLVERSION.html)
     */
    readonly proxySslversion: "PROXY_SSLVERSION";
    /**
     * Proxy TLS 1.3 cipher suites to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLS13_CIPHERS.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLS13_CIPHERS.html)
     */
    readonly proxyTls13Ciphers: "PROXY_TLS13_CIPHERS";
    /**
     * Proxy TLS authentication password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_PASSWORD.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_PASSWORD.html)
     */
    readonly proxyTlsAuthPassword: "PROXY_TLSAUTH_PASSWORD";
    /**
     * Proxy TLS authentication methods.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_TYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_TYPE.html)
     */
    readonly proxyTlsAuthType: "PROXY_TLSAUTH_TYPE";
    /**
     * Proxy TLS authentication user name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_USERNAME.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_USERNAME.html)
     */
    readonly proxyTlsAuthUsername: "PROXY_TLSAUTH_USERNAME";
    /**
     * Add transfer mode to URL over proxy.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TRANSFER_MODE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TRANSFER_MODE.html)
     */
    readonly proxyTransferMode: "PROXY_TRANSFER_MODE";
    /**
     * HTTP proxy authentication methods.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYAUTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYAUTH.html)
     */
    readonly proxyAuth: "PROXYAUTH";
    /**
     * Custom HTTP headers sent to proxy.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYHEADER.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYHEADER.html)
     */
    readonly proxyHeader: "PROXYHEADER";
    /**
     * Proxy password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYPASSWORD.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYPASSWORD.html)
     */
    readonly proxyPassword: "PROXYPASSWORD";
    /**
     * Proxy port to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYPORT.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYPORT.html)
     */
    readonly proxyPort: "PROXYPORT";
    /**
     * Proxy type.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYTYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYTYPE.html)
     */
    readonly proxyType: "PROXYTYPE";
    /**
     * Proxy user name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYUSERNAME.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYUSERNAME.html)
     */
    readonly proxyUsername: "PROXYUSERNAME";
    /**
     * Proxy user name and password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYUSERPWD.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYUSERPWD.html)
     */
    readonly proxyUserpwd: "PROXYUSERPWD";
    /**
     * Issue an HTTP PUT request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PUT.html](https://curl.haxx.se/libcurl/c/CURLOPT_PUT.html)
     */
    readonly put: "PUT";
    /**
     * Commands to run before transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_QUOTE.html](https://curl.haxx.se/libcurl/c/CURLOPT_QUOTE.html)
     */
    readonly quote: "QUOTE";
    /**
     * Provide source for entropy random data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RANDOM_FILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_RANDOM_FILE.html)
     */
    readonly randomFile: "RANDOM_FILE";
    /**
     * Range requests.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RANGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_RANGE.html)
     */
    readonly range: "RANGE";
    /**
     * Data pointer to pass to the read callback.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_READDATA.html](https://curl.haxx.se/libcurl/c/CURLOPT_READDATA.html)
     */
    readonly readData: "READDATA";
    /**
     * Callback for reading data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_READFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_READFUNCTION.html)
     */
    readonly readFunction: "READFUNCTION";
    /**
     * Protocols to allow redirects to.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_REDIR_PROTOCOLS.html](https://curl.haxx.se/libcurl/c/CURLOPT_REDIR_PROTOCOLS.html)
     */
    readonly redirProtocols: "REDIR_PROTOCOLS";
    /**
     * Referer: header.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_REFERER.html](https://curl.haxx.se/libcurl/c/CURLOPT_REFERER.html)
     */
    readonly referer: "REFERER";
    /**
     * Set the request target.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_REQUEST_TARGET.html](https://curl.haxx.se/libcurl/c/CURLOPT_REQUEST_TARGET.html)
     */
    readonly requestTarget: "REQUEST_TARGET";
    /**
     * Provide fixed/fake name resolves.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RESOLVE.html](https://curl.haxx.se/libcurl/c/CURLOPT_RESOLVE.html)
     */
    readonly resolve: "RESOLVE";
    /**
     * Resume a transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RESUME_FROM.html](https://curl.haxx.se/libcurl/c/CURLOPT_RESUME_FROM.html)
     */
    readonly resumeFrom: "RESUME_FROM";
    /**
     * Resume a transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RESUME_FROM_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_RESUME_FROM_LARGE.html)
     */
    readonly resumeFromLarge: "RESUME_FROM_LARGE";
    /**
     * Client CSEQ number.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_CLIENT_CSEQ.html](https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_CLIENT_CSEQ.html)
     */
    readonly rtspClientCseq: "RTSP_CLIENT_CSEQ";
    /**
     * RTSP request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_REQUEST.html](https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_REQUEST.html)
     */
    readonly rtspRequest: "RTSP_REQUEST";
    /**
     * CSEQ number for RTSP Server-\>Client request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_SERVER_CSEQ.html](https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_SERVER_CSEQ.html)
     */
    readonly rtspServerCseq: "RTSP_SERVER_CSEQ";
    /**
     * RTSP session-id.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_SESSION_ID.html](https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_SESSION_ID.html)
     */
    readonly rtspSessionId: "RTSP_SESSION_ID";
    /**
     * RTSP stream URI.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_STREAM_URI.html](https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_STREAM_URI.html)
     */
    readonly rtspStreamUri: "RTSP_STREAM_URI";
    /**
     * RTSP Transport: header.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_TRANSPORT.html](https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_TRANSPORT.html)
     */
    readonly rtspTransPort: "RTSP_TRANSPORT";
    /**
     * SASL authorization identity (identity to act as).
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SASL_AUTHZID.html](https://curl.haxx.se/libcurl/c/CURLOPT_SASL_AUTHZID.html)
     */
    readonly saslAuthzId: "SASL_AUTHZID";
    /**
     * Enable SASL initial response.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SASL_IR.html](https://curl.haxx.se/libcurl/c/CURLOPT_SASL_IR.html)
     */
    readonly saslIr: "SASL_IR";
    /**
     * Callback for seek operations.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SEEKFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_SEEKFUNCTION.html)
     */
    readonly seekFunction: "SEEKFUNCTION";
    /**
     * Authentication service name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SERVICE_NAME.html](https://curl.haxx.se/libcurl/c/CURLOPT_SERVICE_NAME.html)
     */
    readonly serviceName: "SERVICE_NAME";
    /**
     * Share object to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SHARE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SHARE.html)
     */
    readonly share: "SHARE";
    /**
     * Socks5 authentication methods.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SOCKS5_AUTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_SOCKS5_AUTH.html)
     */
    readonly socks5Auth: "SOCKS5_AUTH";
    /**
     * Socks5 GSSAPI NEC mode.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SOCKS5_GSSAPI_NEC.html](https://curl.haxx.se/libcurl/c/CURLOPT_SOCKS5_GSSAPI_NEC.html)
     */
    readonly socks5GssapiNec: "SOCKS5_GSSAPI_NEC";
    /**
     * Socks5 GSSAPI service name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SOCKS5_GSSAPI_SERVICE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SOCKS5_GSSAPI_SERVICE.html)
     */
    readonly socks5GssapiService: "SOCKS5_GSSAPI_SERVICE";
    /**
     * SSH authentication types.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_AUTH_TYPES.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_AUTH_TYPES.html)
     */
    readonly sshAuthTypes: "SSH_AUTH_TYPES";
    /**
     * Enable SSH compression.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_COMPRESSION.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_COMPRESSION.html)
     */
    readonly sshCompression: "SSH_COMPRESSION";
    /**
     * MD5 of host's public key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_HOST_PUBLIC_KEY_MD5.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_HOST_PUBLIC_KEY_MD5.html)
     */
    readonly sshHostPublicKeyMd5: "SSH_HOST_PUBLIC_KEY_MD5";
    /**
     * SHA256 of host's public key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_HOST_PUBLIC_KEY_SHA256.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_HOST_PUBLIC_KEY_SHA256.html)
     */
    readonly sshHostPublicKeySha256: "SSH_HOST_PUBLIC_KEY_SHA256";
    /**
     * File name with known hosts.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_KNOWNHOSTS.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_KNOWNHOSTS.html)
     */
    readonly sshKnownHosts: "SSH_KNOWNHOSTS";
    /**
     * File name of private key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_PRIVATE_KEYFILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_PRIVATE_KEYFILE.html)
     */
    readonly sshPrivateKeyFile: "SSH_PRIVATE_KEYFILE";
    /**
     * File name of public key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_PUBLIC_KEYFILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_PUBLIC_KEYFILE.html)
     */
    readonly sshPublicKeyFile: "SSH_PUBLIC_KEYFILE";
    /**
     * Ciphers to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_CIPHER_LIST.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_CIPHER_LIST.html)
     */
    readonly sslCipherList: "SSL_CIPHER_LIST";
    /**
     * Set key exchange curves.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_EC_CURVES.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_EC_CURVES.html)
     */
    readonly sslEcCurves: "SSL_EC_CURVES";
    /**
     * Enable use of ALPN.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_ENABLE_ALPN.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_ENABLE_ALPN.html)
     */
    readonly sslEnableAlpn: "SSL_ENABLE_ALPN";
    /**
     * Enable use of NPN.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_ENABLE_NPN.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_ENABLE_NPN.html)
     */
    readonly sslEnableNpn: "SSL_ENABLE_NPN";
    /**
     * Enable TLS False Start.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_FALSESTART.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_FALSESTART.html)
     */
    readonly sslFalsestart: "SSL_FALSESTART";
    /**
     * Control SSL behavior.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_OPTIONS.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_OPTIONS.html)
     */
    readonly sslOptions: "SSL_OPTIONS";
    /**
     * Disable SSL session-id cache.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_SESSIONID_CACHE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_SESSIONID_CACHE.html)
     */
    readonly sslSessionIdCache: "SSL_SESSIONID_CACHE";
    /**
     * Verify the host name in the SSL certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYHOST.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYHOST.html)
     */
    readonly sslVerifyHost: "SSL_VERIFYHOST";
    /**
     * Verify the SSL certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYPEER.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYPEER.html)
     */
    readonly sslVerifyPeer: "SSL_VERIFYPEER";
    /**
     * Verify the SSL certificate's status.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYSTATUS.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYSTATUS.html)
     */
    readonly sslVerifyStatus: "SSL_VERIFYSTATUS";
    /**
     * Client cert.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERT.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERT.html)
     */
    readonly sslCert: "SSLCERT";
    /**
     * Client cert memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERT_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERT_BLOB.html)
     */
    readonly sslCertBlob: "SSLCERT_BLOB";
    /**
     * Client cert type.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERTTYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERTTYPE.html)
     */
    readonly sslCertType: "SSLCERTTYPE";
    /**
     * Use identifier with SSL engine.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLENGINE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLENGINE.html)
     */
    readonly sslEngine: "SSLENGINE";
    /**
     * Default SSL engine.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLENGINE_DEFAULT.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLENGINE_DEFAULT.html)
     */
    readonly sslEngineDefault: "SSLENGINE_DEFAULT";
    /**
     * Client key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLKEY.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLKEY.html)
     */
    readonly sslKey: "SSLKEY";
    /**
     * Client key memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLKEY_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLKEY_BLOB.html)
     */
    readonly sslKeyBlob: "SSLKEY_BLOB";
    /**
     * Client key type.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLKEYTYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLKEYTYPE.html)
     */
    readonly sslKeyType: "SSLKEYTYPE";
    /**
     * SSL version to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLVERSION.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLVERSION.html)
     */
    readonly sslversion: "SSLVERSION";
    /**
     * Suppress proxy CONNECT response headers from user callbacks.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SUPPRESS_CONNECT_HEADERS.html](https://curl.haxx.se/libcurl/c/CURLOPT_SUPPRESS_CONNECT_HEADERS.html)
     */
    readonly suppressConnectHeaders: "SUPPRESS_CONNECT_HEADERS";
    /**
     * Enable TFO, TCP Fast Open.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TCP_FASTOPEN.html](https://curl.haxx.se/libcurl/c/CURLOPT_TCP_FASTOPEN.html)
     */
    readonly tcpFastOpen: "TCP_FASTOPEN";
    /**
     * Enable TCP keep-alive.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPALIVE.html](https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPALIVE.html)
     */
    readonly tcpKeepAlive: "TCP_KEEPALIVE";
    /**
     * Idle time before sending keep-alive.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPIDLE.html](https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPIDLE.html)
     */
    readonly tcpKeepIdle: "TCP_KEEPIDLE";
    /**
     * Interval between keep-alive probes.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPINTVL.html](https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPINTVL.html)
     */
    readonly tcpKeepIntvl: "TCP_KEEPINTVL";
    /**
     * Disable the Nagle algorithm.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TCP_NODELAY.html](https://curl.haxx.se/libcurl/c/CURLOPT_TCP_NODELAY.html)
     */
    readonly tcpNoDelay: "TCP_NODELAY";
    /**
     * TELNET options.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TELNETOPTIONS.html](https://curl.haxx.se/libcurl/c/CURLOPT_TELNETOPTIONS.html)
     */
    readonly telnetOptions: "TELNETOPTIONS";
    /**
     * TFTP block size.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TFTP_BLKSIZE.html](https://curl.haxx.se/libcurl/c/CURLOPT_TFTP_BLKSIZE.html)
     */
    readonly tftpBlkSize: "TFTP_BLKSIZE";
    /**
     * Do not send TFTP options requests.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TFTP_NO_OPTIONS.html](https://curl.haxx.se/libcurl/c/CURLOPT_TFTP_NO_OPTIONS.html)
     */
    readonly tftpNoOptions: "TFTP_NO_OPTIONS";
    /**
     * Make a time conditional request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TIMECONDITION.html](https://curl.haxx.se/libcurl/c/CURLOPT_TIMECONDITION.html)
     */
    readonly timeCondition: "TIMECONDITION";
    /**
     * Timeout for the entire request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TIMEOUT.html](https://curl.haxx.se/libcurl/c/CURLOPT_TIMEOUT.html)
     */
    readonly timeout: "TIMEOUT";
    /**
     * Millisecond timeout for the entire request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TIMEOUT_MS.html](https://curl.haxx.se/libcurl/c/CURLOPT_TIMEOUT_MS.html)
     */
    readonly timeoutMs: "TIMEOUT_MS";
    /**
     * Time value for the time conditional request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TIMEVALUE.html](https://curl.haxx.se/libcurl/c/CURLOPT_TIMEVALUE.html)
     */
    readonly timeValue: "TIMEVALUE";
    /**
     * Time value for the time conditional request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TIMEVALUE_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_TIMEVALUE_LARGE.html)
     */
    readonly timeValueLarge: "TIMEVALUE_LARGE";
    /**
     * TLS 1.3 cipher suites to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TLS13_CIPHERS.html](https://curl.haxx.se/libcurl/c/CURLOPT_TLS13_CIPHERS.html)
     */
    readonly tls13Ciphers: "TLS13_CIPHERS";
    /**
     * TLS authentication password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_PASSWORD.html](https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_PASSWORD.html)
     */
    readonly tlsAuthPassword: "TLSAUTH_PASSWORD";
    /**
     * TLS authentication methods.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_TYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_TYPE.html)
     */
    readonly tlsAuthType: "TLSAUTH_TYPE";
    /**
     * TLS authentication user name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_USERNAME.html](https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_USERNAME.html)
     */
    readonly tlsAuthUsername: "TLSAUTH_USERNAME";
    /**
     * Set callback for sending trailing headers.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TRAILERFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_TRAILERFUNCTION.html)
     */
    readonly trailerFunction: "TRAILERFUNCTION";
    /**
     * Request Transfer-Encoding.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TRANSFER_ENCODING.html](https://curl.haxx.se/libcurl/c/CURLOPT_TRANSFER_ENCODING.html)
     */
    readonly transferEncoding: "TRANSFER_ENCODING";
    /**
     * Use text transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TRANSFERTEXT.html](https://curl.haxx.se/libcurl/c/CURLOPT_TRANSFERTEXT.html)
     */
    readonly transferText: "TRANSFERTEXT";
    /**
     * Path to a Unix domain socket.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_UNIX_SOCKET_PATH.html](https://curl.haxx.se/libcurl/c/CURLOPT_UNIX_SOCKET_PATH.html)
     */
    readonly unixSocketPath: "UNIX_SOCKET_PATH";
    /**
     * Do not restrict authentication to original host.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_UNRESTRICTED_AUTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_UNRESTRICTED_AUTH.html)
     */
    readonly unrestrictedAuth: "UNRESTRICTED_AUTH";
    /**
     * Sets the interval at which connection upkeep are performed.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_UPKEEP_INTERVAL_MS.html](https://curl.haxx.se/libcurl/c/CURLOPT_UPKEEP_INTERVAL_MS.html)
     */
    readonly upkeepIntervalMs: "UPKEEP_INTERVAL_MS";
    /**
     * Upload data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_UPLOAD.html](https://curl.haxx.se/libcurl/c/CURLOPT_UPLOAD.html)
     */
    readonly upload: "UPLOAD";
    /**
     * Set upload buffer size.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_UPLOAD_BUFFERSIZE.html](https://curl.haxx.se/libcurl/c/CURLOPT_UPLOAD_BUFFERSIZE.html)
     */
    readonly uploadBufferSize: "UPLOAD_BUFFERSIZE";
    /**
     * URL to work on.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_URL.html](https://curl.haxx.se/libcurl/c/CURLOPT_URL.html)
     */
    readonly url: "URL";
    /**
     * Use TLS/SSL.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_USE_SSL.html](https://curl.haxx.se/libcurl/c/CURLOPT_USE_SSL.html)
     */
    readonly useSsl: "USE_SSL";
    /**
     * User-Agent: header.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_USERAGENT.html](https://curl.haxx.se/libcurl/c/CURLOPT_USERAGENT.html)
     */
    readonly userAgent: "USERAGENT";
    /**
     * User name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_USERNAME.html](https://curl.haxx.se/libcurl/c/CURLOPT_USERNAME.html)
     */
    readonly username: "USERNAME";
    /**
     * User name and password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_USERPWD.html](https://curl.haxx.se/libcurl/c/CURLOPT_USERPWD.html)
     */
    readonly userpwd: "USERPWD";
    /**
     * Display verbose information.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_VERBOSE.html](https://curl.haxx.se/libcurl/c/CURLOPT_VERBOSE.html)
     */
    readonly verbose: "VERBOSE";
    /**
     * Transfer multiple files according to a file name pattern.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_WILDCARDMATCH.html](https://curl.haxx.se/libcurl/c/CURLOPT_WILDCARDMATCH.html)
     */
    readonly wildcardMatch: "WILDCARDMATCH";
    /**
     * Callback for writing data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_WRITEFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_WRITEFUNCTION.html)
     */
    readonly writeFunction: "WRITEFUNCTION";
    /**
     * Callback for progress meter.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_XFERINFOFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_XFERINFOFUNCTION.html)
     */
    readonly xferInfoFunction: "XFERINFOFUNCTION";
    /**
     * OAuth2 bearer token.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_XOAUTH2_BEARER.html](https://curl.haxx.se/libcurl/c/CURLOPT_XOAUTH2_BEARER.html)
     */
    readonly xoauth2Bearer: "XOAUTH2_BEARER";
    /**
     * (curl-impersonate) SSL Compression type. Eg. brotli
     *
     * Official libcurl documentation: : [https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L125](https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L125)
     */
    readonly sslCompression: "SSL_COMPRESSION";
    /**
     * (curl-impersonate) TLS Client hello match Extension
     *
     * Official libcurl documentation: : [https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L119](https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L119)
     */
    readonly sslEnableAlps: "SSL_ENABLE_ALPS";
};
/**
 * @public
 */
export declare type CurlOptionName = 'ABSTRACT_UNIX_SOCKET' | 'ACCEPT_ENCODING' | 'ACCEPTTIMEOUT_MS' | 'ADDRESS_SCOPE' | 'ALTSVC' | 'ALTSVC_CTRL' | 'APPEND' | 'AUTOREFERER' | 'AWS_SIGV4' | 'BUFFERSIZE' | 'CAINFO' | 'CAINFO_BLOB' | 'CAPATH' | 'CERTINFO' | 'CHUNK_BGN_FUNCTION' | 'CHUNK_END_FUNCTION' | 'CONNECT_ONLY' | 'CONNECT_TO' | 'CONNECTTIMEOUT' | 'CONNECTTIMEOUT_MS' | 'COOKIE' | 'COOKIEFILE' | 'COOKIEJAR' | 'COOKIELIST' | 'COOKIESESSION' | 'CRLF' | 'CRLFILE' | 'CUSTOMREQUEST' | 'DEBUGFUNCTION' | 'DEFAULT_PROTOCOL' | 'DIRLISTONLY' | 'DISALLOW_USERNAME_IN_URL' | 'DNS_CACHE_TIMEOUT' | 'DNS_INTERFACE' | 'DNS_LOCAL_IP4' | 'DNS_LOCAL_IP6' | 'DNS_SERVERS' | 'DNS_SHUFFLE_ADDRESSES' | 'DNS_USE_GLOBAL_CACHE' | 'DOH_SSL_VERIFYHOST' | 'DOH_SSL_VERIFYPEER' | 'DOH_SSL_VERIFYSTATUS' | 'DOH_URL' | 'EGDSOCKET' | 'EXPECT_100_TIMEOUT_MS' | 'FAILONERROR' | 'FILETIME' | 'FNMATCH_FUNCTION' | 'FOLLOWLOCATION' | 'FORBID_REUSE' | 'FRESH_CONNECT' | 'FTP_ACCOUNT' | 'FTP_ALTERNATIVE_TO_USER' | 'FTP_CREATE_MISSING_DIRS' | 'FTP_FILEMETHOD' | 'FTP_RESPONSE_TIMEOUT' | 'FTP_SKIP_PASV_IP' | 'FTP_SSL_CCC' | 'FTP_USE_EPRT' | 'FTP_USE_EPSV' | 'FTP_USE_PRET' | 'FTPPORT' | 'FTPSSLAUTH' | 'GSSAPI_DELEGATION' | 'HAPPY_EYEBALLS_TIMEOUT_MS' | 'HAPROXYPROTOCOL' | 'HEADER' | 'HEADERFUNCTION' | 'HEADEROPT' | 'HSTS' | 'HSTS_CTRL' | 'HSTSREADFUNCTION' | 'HSTSWRITEFUNCTION' | 'HTTP_CONTENT_DECODING' | 'HTTP_TRANSFER_DECODING' | 'HTTP_VERSION' | 'HTTP09_ALLOWED' | 'HTTP200ALIASES' | 'HTTPAUTH' | 'HTTPGET' | 'HTTPHEADER' | 'HTTPPOST' | 'HTTPPROXYTUNNEL' | 'IGNORE_CONTENT_LENGTH' | 'INFILESIZE' | 'INFILESIZE_LARGE' | 'INTERFACE' | 'IPRESOLVE' | 'ISSUERCERT' | 'ISSUERCERT_BLOB' | 'KEEP_SENDING_ON_ERROR' | 'KEYPASSWD' | 'KRBLEVEL' | 'LOCALPORT' | 'LOCALPORTRANGE' | 'LOGIN_OPTIONS' | 'LOW_SPEED_LIMIT' | 'LOW_SPEED_TIME' | 'MAIL_AUTH' | 'MAIL_FROM' | 'MAIL_RCPT' | 'MAIL_RCPT_ALLLOWFAILS' | 'MAX_RECV_SPEED_LARGE' | 'MAX_SEND_SPEED_LARGE' | 'MAXAGE_CONN' | 'MAXCONNECTS' | 'MAXFILESIZE' | 'MAXFILESIZE_LARGE' | 'MAXLIFETIME_CONN' | 'MAXREDIRS' | 'MIME_OPTIONS' | 'MIMEPOST' | 'NETRC' | 'NETRC_FILE' | 'NEW_DIRECTORY_PERMS' | 'NEW_FILE_PERMS' | 'NOBODY' | 'NOPROGRESS' | 'NOPROXY' | 'NOSIGNAL' | 'PASSWORD' | 'PATH_AS_IS' | 'PINNEDPUBLICKEY' | 'PIPEWAIT' | 'PORT' | 'POST' | 'POSTFIELDS' | 'POSTFIELDSIZE' | 'POSTFIELDSIZE_LARGE' | 'POSTQUOTE' | 'POSTREDIR' | 'PRE_PROXY' | 'PREQUOTE' | 'PREREQDATA' | 'PREREQFUNCTION' | 'PROGRESSFUNCTION' | 'PROTOCOLS' | 'PROXY' | 'PROXY_CAINFO' | 'PROXY_CAINFO_BLOB' | 'PROXY_CAPATH' | 'PROXY_CRLFILE' | 'PROXY_ISSUERCERT' | 'PROXY_ISSUERCERT_BLOB' | 'PROXY_KEYPASSWD' | 'PROXY_PINNEDPUBLICKEY' | 'PROXY_SERVICE_NAME' | 'PROXY_SSL_CIPHER_LIST' | 'PROXY_SSL_OPTIONS' | 'PROXY_SSL_VERIFYHOST' | 'PROXY_SSL_VERIFYPEER' | 'PROXY_SSLCERT' | 'PROXY_SSLCERT_BLOB' | 'PROXY_SSLCERTTYPE' | 'PROXY_SSLKEY' | 'PROXY_SSLKEY_BLOB' | 'PROXY_SSLKEYTYPE' | 'PROXY_SSLVERSION' | 'PROXY_TLS13_CIPHERS' | 'PROXY_TLSAUTH_PASSWORD' | 'PROXY_TLSAUTH_TYPE' | 'PROXY_TLSAUTH_USERNAME' | 'PROXY_TRANSFER_MODE' | 'PROXYAUTH' | 'PROXYHEADER' | 'PROXYPASSWORD' | 'PROXYPORT' | 'PROXYTYPE' | 'PROXYUSERNAME' | 'PROXYUSERPWD' | 'PUT' | 'QUOTE' | 'RANDOM_FILE' | 'RANGE' | 'READDATA' | 'READFUNCTION' | 'REDIR_PROTOCOLS' | 'REFERER' | 'REQUEST_TARGET' | 'RESOLVE' | 'RESUME_FROM' | 'RESUME_FROM_LARGE' | 'RTSP_CLIENT_CSEQ' | 'RTSP_REQUEST' | 'RTSP_SERVER_CSEQ' | 'RTSP_SESSION_ID' | 'RTSP_STREAM_URI' | 'RTSP_TRANSPORT' | 'SASL_AUTHZID' | 'SASL_IR' | 'SEEKFUNCTION' | 'SERVICE_NAME' | 'SHARE' | 'SOCKS5_AUTH' | 'SOCKS5_GSSAPI_NEC' | 'SOCKS5_GSSAPI_SERVICE' | 'SSH_AUTH_TYPES' | 'SSH_COMPRESSION' | 'SSH_HOST_PUBLIC_KEY_MD5' | 'SSH_HOST_PUBLIC_KEY_SHA256' | 'SSH_KNOWNHOSTS' | 'SSH_PRIVATE_KEYFILE' | 'SSH_PUBLIC_KEYFILE' | 'SSL_CIPHER_LIST' | 'SSL_EC_CURVES' | 'SSL_ENABLE_ALPN' | 'SSL_ENABLE_NPN' | 'SSL_FALSESTART' | 'SSL_OPTIONS' | 'SSL_SESSIONID_CACHE' | 'SSL_VERIFYHOST' | 'SSL_VERIFYPEER' | 'SSL_VERIFYSTATUS' | 'SSLCERT' | 'SSLCERT_BLOB' | 'SSLCERTTYPE' | 'SSLENGINE' | 'SSLENGINE_DEFAULT' | 'SSLKEY' | 'SSLKEY_BLOB' | 'SSLKEYTYPE' | 'SSLVERSION' | 'SUPPRESS_CONNECT_HEADERS' | 'TCP_FASTOPEN' | 'TCP_KEEPALIVE' | 'TCP_KEEPIDLE' | 'TCP_KEEPINTVL' | 'TCP_NODELAY' | 'TELNETOPTIONS' | 'TFTP_BLKSIZE' | 'TFTP_NO_OPTIONS' | 'TIMECONDITION' | 'TIMEOUT' | 'TIMEOUT_MS' | 'TIMEVALUE' | 'TIMEVALUE_LARGE' | 'TLS13_CIPHERS' | 'TLSAUTH_PASSWORD' | 'TLSAUTH_TYPE' | 'TLSAUTH_USERNAME' | 'TRAILERFUNCTION' | 'TRANSFER_ENCODING' | 'TRANSFERTEXT' | 'UNIX_SOCKET_PATH' | 'UNRESTRICTED_AUTH' | 'UPKEEP_INTERVAL_MS' | 'UPLOAD' | 'UPLOAD_BUFFERSIZE' | 'URL' | 'USE_SSL' | 'USERAGENT' | 'USERNAME' | 'USERPWD' | 'VERBOSE' | 'WILDCARDMATCH' | 'WRITEFUNCTION' | 'XFERINFOFUNCTION' | 'XOAUTH2_BEARER' | 'SSL_COMPRESSION' | 'SSL_ENABLE_ALPS';
import { FileInfo, HttpPostField } from '../types';
export declare type DataCallbackOptions = 'READFUNCTION' | 'HEADERFUNCTION' | 'WRITEFUNCTION';
export declare type ProgressCallbackOptions = 'PROGRESSFUNCTION' | 'XFERINFOFUNCTION';
export declare type StringListOptions = 'CONNECT_TO' | 'HTTP200ALIASES' | 'HTTPHEADER' | 'MAIL_RCPT' | 'PROXYHEADER' | 'POSTQUOTE' | 'PREQUOTE' | 'QUOTE' | 'RESOLVE' | 'TELNETOPTIONS';
export declare type BlobOptions = 'CAINFO_BLOB' | 'ISSUERCERT_BLOB' | 'SSLKEY_BLOB' | 'SSLCERT_BLOB' | 'PROXY_CAINFO_BLOB' | 'PROXY_SSLCERT_BLOB' | 'PROXY_SSLCERT' | 'PROXY_SSLKEY_BLOB';
export declare type SpecificOptions = DataCallbackOptions | ProgressCallbackOptions | StringListOptions | BlobOptions | 'CHUNK_BGN_FUNCTION' | 'CHUNK_END_FUNCTION' | 'DEBUGFUNCTION' | 'FNMATCH_FUNCTION' | 'HSTSREADFUNCTION' | 'HSTSWRITEFUNCTION' | 'SEEKFUNCTION' | 'TRAILERFUNCTION' | 'SHARE' | 'HTTPPOST' | 'FTP_SSL_CCC' | 'FTP_FILEMETHOD' | 'GSSAPI_DELEGATION' | 'HEADEROPT' | 'HTTP_VERSION' | 'IPRESOLVE' | 'NETRC' | 'PROTOCOLS' | 'PROXY_SSL_OPTIONS' | 'PROXYTYPE' | 'REDIR_PROTOCOLS' | 'RTSP_REQUEST' | 'SSH_AUTH_TYPES' | 'SSL_OPTIONS' | 'SSLVERSION' | 'TIMECONDITION' | 'USE_SSL' | 'HSTS_CTRL';
/**
 * @public
 */
export declare type CurlOptionValueType = {
    /**
     * Path to an abstract Unix domain socket.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ABSTRACT_UNIX_SOCKET.html](https://curl.haxx.se/libcurl/c/CURLOPT_ABSTRACT_UNIX_SOCKET.html)
     */
    ABSTRACT_UNIX_SOCKET?: string | number | boolean | null;
    /**
     * Path to an abstract Unix domain socket.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ABSTRACT_UNIX_SOCKET.html](https://curl.haxx.se/libcurl/c/CURLOPT_ABSTRACT_UNIX_SOCKET.html)
     */
    abstractUnixSocket?: string | number | boolean | null;
    /**
     * Accept-Encoding and automatic decompressing data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ACCEPT_ENCODING.html](https://curl.haxx.se/libcurl/c/CURLOPT_ACCEPT_ENCODING.html)
     */
    ACCEPT_ENCODING?: string | number | boolean | null;
    /**
     * Accept-Encoding and automatic decompressing data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ACCEPT_ENCODING.html](https://curl.haxx.se/libcurl/c/CURLOPT_ACCEPT_ENCODING.html)
     */
    acceptEncoding?: string | number | boolean | null;
    /**
     * Timeout for waiting for the server's connect back to be accepted.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ACCEPTTIMEOUT_MS.html](https://curl.haxx.se/libcurl/c/CURLOPT_ACCEPTTIMEOUT_MS.html)
     */
    ACCEPTTIMEOUT_MS?: string | number | boolean | null;
    /**
     * Timeout for waiting for the server's connect back to be accepted.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ACCEPTTIMEOUT_MS.html](https://curl.haxx.se/libcurl/c/CURLOPT_ACCEPTTIMEOUT_MS.html)
     */
    acceptTimeoutMs?: string | number | boolean | null;
    /**
     * IPv6 scope for local addresses.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ADDRESS_SCOPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_ADDRESS_SCOPE.html)
     */
    ADDRESS_SCOPE?: string | number | boolean | null;
    /**
     * IPv6 scope for local addresses.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ADDRESS_SCOPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_ADDRESS_SCOPE.html)
     */
    addressScope?: string | number | boolean | null;
    /**
     * Specify the Alt-Svc: cache file name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ALTSVC.html](https://curl.haxx.se/libcurl/c/CURLOPT_ALTSVC.html)
     */
    ALTSVC?: string | number | boolean | null;
    /**
     * Specify the Alt-Svc: cache file name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ALTSVC.html](https://curl.haxx.se/libcurl/c/CURLOPT_ALTSVC.html)
     */
    altSvc?: string | number | boolean | null;
    /**
     * Enable and configure Alt-Svc: treatment.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ALTSVC_CTRL.html](https://curl.haxx.se/libcurl/c/CURLOPT_ALTSVC_CTRL.html)
     */
    ALTSVC_CTRL?: string | number | boolean | null;
    /**
     * Enable and configure Alt-Svc: treatment.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ALTSVC_CTRL.html](https://curl.haxx.se/libcurl/c/CURLOPT_ALTSVC_CTRL.html)
     */
    altSvcCtrl?: string | number | boolean | null;
    /**
     * Append to remote file.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_APPEND.html](https://curl.haxx.se/libcurl/c/CURLOPT_APPEND.html)
     */
    APPEND?: string | number | boolean | null;
    /**
     * Append to remote file.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_APPEND.html](https://curl.haxx.se/libcurl/c/CURLOPT_APPEND.html)
     */
    append?: string | number | boolean | null;
    /**
     * Automatically set Referer: header.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_AUTOREFERER.html](https://curl.haxx.se/libcurl/c/CURLOPT_AUTOREFERER.html)
     */
    AUTOREFERER?: string | number | boolean | null;
    /**
     * Automatically set Referer: header.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_AUTOREFERER.html](https://curl.haxx.se/libcurl/c/CURLOPT_AUTOREFERER.html)
     */
    autoReferer?: string | number | boolean | null;
    /**
     * AWS HTTP V4 Signature.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_AWS_SIGV4.html](https://curl.haxx.se/libcurl/c/CURLOPT_AWS_SIGV4.html)
     */
    AWS_SIGV4?: string | number | boolean | null;
    /**
     * AWS HTTP V4 Signature.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_AWS_SIGV4.html](https://curl.haxx.se/libcurl/c/CURLOPT_AWS_SIGV4.html)
     */
    awsSigV4?: string | number | boolean | null;
    /**
     * Ask for alternate buffer size.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_BUFFERSIZE.html](https://curl.haxx.se/libcurl/c/CURLOPT_BUFFERSIZE.html)
     */
    BUFFERSIZE?: string | number | boolean | null;
    /**
     * Ask for alternate buffer size.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_BUFFERSIZE.html](https://curl.haxx.se/libcurl/c/CURLOPT_BUFFERSIZE.html)
     */
    bufferSize?: string | number | boolean | null;
    /**
     * CA cert bundle.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CAINFO.html](https://curl.haxx.se/libcurl/c/CURLOPT_CAINFO.html)
     */
    CAINFO?: string | number | boolean | null;
    /**
     * CA cert bundle.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CAINFO.html](https://curl.haxx.se/libcurl/c/CURLOPT_CAINFO.html)
     */
    caInfo?: string | number | boolean | null;
    /**
     * CA cert bundle memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CAINFO_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_CAINFO_BLOB.html)
     */
    CAINFO_BLOB?: ArrayBuffer | Buffer | string | null;
    /**
     * CA cert bundle memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CAINFO_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_CAINFO_BLOB.html)
     */
    caInfoBlob?: ArrayBuffer | Buffer | string | null;
    /**
     * Path to CA cert bundle.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CAPATH.html](https://curl.haxx.se/libcurl/c/CURLOPT_CAPATH.html)
     */
    CAPATH?: string | number | boolean | null;
    /**
     * Path to CA cert bundle.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CAPATH.html](https://curl.haxx.se/libcurl/c/CURLOPT_CAPATH.html)
     */
    caPath?: string | number | boolean | null;
    /**
     * Extract certificate info.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CERTINFO.html](https://curl.haxx.se/libcurl/c/CURLOPT_CERTINFO.html)
     */
    CERTINFO?: string | number | boolean | null;
    /**
     * Extract certificate info.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CERTINFO.html](https://curl.haxx.se/libcurl/c/CURLOPT_CERTINFO.html)
     */
    certInfo?: string | number | boolean | null;
    /**
     * Callback for wildcard download start of chunk.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CHUNK_BGN_FUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_CHUNK_BGN_FUNCTION.html)
     */
    CHUNK_BGN_FUNCTION?: ((this: EasyNativeBinding, fileInfo: FileInfo, remains: number) => CurlChunk) | null;
    /**
     * Callback for wildcard download start of chunk.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CHUNK_BGN_FUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_CHUNK_BGN_FUNCTION.html)
     */
    chunkBgnFunction?: ((this: EasyNativeBinding, fileInfo: FileInfo, remains: number) => CurlChunk) | null;
    /**
     * Callback for wildcard download end of chunk.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CHUNK_END_FUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_CHUNK_END_FUNCTION.html)
     */
    CHUNK_END_FUNCTION?: ((this: EasyNativeBinding) => CurlChunk) | null;
    /**
     * Callback for wildcard download end of chunk.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CHUNK_END_FUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_CHUNK_END_FUNCTION.html)
     */
    chunkEndFunction?: ((this: EasyNativeBinding) => CurlChunk) | null;
    /**
     * Only connect, nothing else.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CONNECT_ONLY.html](https://curl.haxx.se/libcurl/c/CURLOPT_CONNECT_ONLY.html)
     */
    CONNECT_ONLY?: string | number | boolean | null;
    /**
     * Only connect, nothing else.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CONNECT_ONLY.html](https://curl.haxx.se/libcurl/c/CURLOPT_CONNECT_ONLY.html)
     */
    connectOnly?: string | number | boolean | null;
    /**
     * Connect to a specific host and port.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CONNECT_TO.html](https://curl.haxx.se/libcurl/c/CURLOPT_CONNECT_TO.html)
     */
    CONNECT_TO?: string[] | null;
    /**
     * Connect to a specific host and port.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CONNECT_TO.html](https://curl.haxx.se/libcurl/c/CURLOPT_CONNECT_TO.html)
     */
    connectTo?: string[] | null;
    /**
     * Timeout for the connection phase.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CONNECTTIMEOUT.html](https://curl.haxx.se/libcurl/c/CURLOPT_CONNECTTIMEOUT.html)
     */
    CONNECTTIMEOUT?: string | number | boolean | null;
    /**
     * Timeout for the connection phase.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CONNECTTIMEOUT.html](https://curl.haxx.se/libcurl/c/CURLOPT_CONNECTTIMEOUT.html)
     */
    connectTimeout?: string | number | boolean | null;
    /**
     * Millisecond timeout for the connection phase.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CONNECTTIMEOUT_MS.html](https://curl.haxx.se/libcurl/c/CURLOPT_CONNECTTIMEOUT_MS.html)
     */
    CONNECTTIMEOUT_MS?: string | number | boolean | null;
    /**
     * Millisecond timeout for the connection phase.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CONNECTTIMEOUT_MS.html](https://curl.haxx.se/libcurl/c/CURLOPT_CONNECTTIMEOUT_MS.html)
     */
    connectTimeoutMs?: string | number | boolean | null;
    /**
     * Cookie(s) to send.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_COOKIE.html](https://curl.haxx.se/libcurl/c/CURLOPT_COOKIE.html)
     */
    COOKIE?: string | number | boolean | null;
    /**
     * Cookie(s) to send.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_COOKIE.html](https://curl.haxx.se/libcurl/c/CURLOPT_COOKIE.html)
     */
    cookie?: string | number | boolean | null;
    /**
     * File to read cookies from.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_COOKIEFILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_COOKIEFILE.html)
     */
    COOKIEFILE?: string | number | boolean | null;
    /**
     * File to read cookies from.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_COOKIEFILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_COOKIEFILE.html)
     */
    cookieFile?: string | number | boolean | null;
    /**
     * File to write cookies to.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_COOKIEJAR.html](https://curl.haxx.se/libcurl/c/CURLOPT_COOKIEJAR.html)
     */
    COOKIEJAR?: string | number | boolean | null;
    /**
     * File to write cookies to.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_COOKIEJAR.html](https://curl.haxx.se/libcurl/c/CURLOPT_COOKIEJAR.html)
     */
    cookieJar?: string | number | boolean | null;
    /**
     * Add or control cookies.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_COOKIELIST.html](https://curl.haxx.se/libcurl/c/CURLOPT_COOKIELIST.html)
     */
    COOKIELIST?: string | number | boolean | null;
    /**
     * Add or control cookies.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_COOKIELIST.html](https://curl.haxx.se/libcurl/c/CURLOPT_COOKIELIST.html)
     */
    cookieList?: string | number | boolean | null;
    /**
     * Start a new cookie session.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_COOKIESESSION.html](https://curl.haxx.se/libcurl/c/CURLOPT_COOKIESESSION.html)
     */
    COOKIESESSION?: string | number | boolean | null;
    /**
     * Start a new cookie session.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_COOKIESESSION.html](https://curl.haxx.se/libcurl/c/CURLOPT_COOKIESESSION.html)
     */
    cookieSession?: string | number | boolean | null;
    /**
     * Convert newlines.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CRLF.html](https://curl.haxx.se/libcurl/c/CURLOPT_CRLF.html)
     */
    CRLF?: string | number | boolean | null;
    /**
     * Convert newlines.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CRLF.html](https://curl.haxx.se/libcurl/c/CURLOPT_CRLF.html)
     */
    crlf?: string | number | boolean | null;
    /**
     * Certificate Revocation List.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CRLFILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_CRLFILE.html)
     */
    CRLFILE?: string | number | boolean | null;
    /**
     * Certificate Revocation List.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CRLFILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_CRLFILE.html)
     */
    crlFile?: string | number | boolean | null;
    /**
     * Custom request/method.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CUSTOMREQUEST.html](https://curl.haxx.se/libcurl/c/CURLOPT_CUSTOMREQUEST.html)
     */
    CUSTOMREQUEST?: string | number | boolean | null;
    /**
     * Custom request/method.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_CUSTOMREQUEST.html](https://curl.haxx.se/libcurl/c/CURLOPT_CUSTOMREQUEST.html)
     */
    customRequest?: string | number | boolean | null;
    /**
     * Callback for debug information.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DEBUGFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_DEBUGFUNCTION.html)
     */
    DEBUGFUNCTION?: ((this: EasyNativeBinding, type: CurlInfoDebug, data: Buffer) => 0) | null;
    /**
     * Callback for debug information.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DEBUGFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_DEBUGFUNCTION.html)
     */
    debugFunction?: ((this: EasyNativeBinding, type: CurlInfoDebug, data: Buffer) => 0) | null;
    /**
     * Default protocol.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DEFAULT_PROTOCOL.html](https://curl.haxx.se/libcurl/c/CURLOPT_DEFAULT_PROTOCOL.html)
     */
    DEFAULT_PROTOCOL?: string | number | boolean | null;
    /**
     * Default protocol.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DEFAULT_PROTOCOL.html](https://curl.haxx.se/libcurl/c/CURLOPT_DEFAULT_PROTOCOL.html)
     */
    defaultProtocol?: string | number | boolean | null;
    /**
     * List only.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DIRLISTONLY.html](https://curl.haxx.se/libcurl/c/CURLOPT_DIRLISTONLY.html)
     */
    DIRLISTONLY?: string | number | boolean | null;
    /**
     * List only.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DIRLISTONLY.html](https://curl.haxx.se/libcurl/c/CURLOPT_DIRLISTONLY.html)
     */
    dirListOnly?: string | number | boolean | null;
    /**
     * Do not allow username in URL.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DISALLOW_USERNAME_IN_URL.html](https://curl.haxx.se/libcurl/c/CURLOPT_DISALLOW_USERNAME_IN_URL.html)
     */
    DISALLOW_USERNAME_IN_URL?: string | number | boolean | null;
    /**
     * Do not allow username in URL.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DISALLOW_USERNAME_IN_URL.html](https://curl.haxx.se/libcurl/c/CURLOPT_DISALLOW_USERNAME_IN_URL.html)
     */
    disallowUsernameInUrl?: string | number | boolean | null;
    /**
     * Timeout for DNS cache.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_CACHE_TIMEOUT.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_CACHE_TIMEOUT.html)
     */
    DNS_CACHE_TIMEOUT?: string | number | boolean | null;
    /**
     * Timeout for DNS cache.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_CACHE_TIMEOUT.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_CACHE_TIMEOUT.html)
     */
    dnsCacheTimeout?: string | number | boolean | null;
    /**
     * Bind name resolves to this interface.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_INTERFACE.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_INTERFACE.html)
     */
    DNS_INTERFACE?: string | number | boolean | null;
    /**
     * Bind name resolves to this interface.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_INTERFACE.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_INTERFACE.html)
     */
    dnsInterface?: string | number | boolean | null;
    /**
     * Bind name resolves to this IP4 address.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_LOCAL_IP4.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_LOCAL_IP4.html)
     */
    DNS_LOCAL_IP4?: string | number | boolean | null;
    /**
     * Bind name resolves to this IP4 address.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_LOCAL_IP4.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_LOCAL_IP4.html)
     */
    dnsLocalIp4?: string | number | boolean | null;
    /**
     * Bind name resolves to this IP6 address.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_LOCAL_IP6.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_LOCAL_IP6.html)
     */
    DNS_LOCAL_IP6?: string | number | boolean | null;
    /**
     * Bind name resolves to this IP6 address.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_LOCAL_IP6.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_LOCAL_IP6.html)
     */
    dnsLocalIp6?: string | number | boolean | null;
    /**
     * Preferred DNS servers.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_SERVERS.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_SERVERS.html)
     */
    DNS_SERVERS?: string | number | boolean | null;
    /**
     * Preferred DNS servers.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_SERVERS.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_SERVERS.html)
     */
    dnsServers?: string | number | boolean | null;
    /**
     * Shuffle addresses before use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_SHUFFLE_ADDRESSES.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_SHUFFLE_ADDRESSES.html)
     */
    DNS_SHUFFLE_ADDRESSES?: string | number | boolean | null;
    /**
     * Shuffle addresses before use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_SHUFFLE_ADDRESSES.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_SHUFFLE_ADDRESSES.html)
     */
    dnsShuffleAddresses?: string | number | boolean | null;
    /**
     * OBSOLETE Enable global DNS cache.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_USE_GLOBAL_CACHE.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_USE_GLOBAL_CACHE.html)
     */
    DNS_USE_GLOBAL_CACHE?: string | number | boolean | null;
    /**
     * OBSOLETE Enable global DNS cache.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DNS_USE_GLOBAL_CACHE.html](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_USE_GLOBAL_CACHE.html)
     */
    dnsUseGlobalCache?: string | number | boolean | null;
    /**
     * Verify the host name in the DoH (DNS-over-HTTPS) SSL certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DOH_SSL_VERIFYHOST.html](https://curl.haxx.se/libcurl/c/CURLOPT_DOH_SSL_VERIFYHOST.html)
     */
    DOH_SSL_VERIFYHOST?: string | number | boolean | null;
    /**
     * Verify the host name in the DoH (DNS-over-HTTPS) SSL certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DOH_SSL_VERIFYHOST.html](https://curl.haxx.se/libcurl/c/CURLOPT_DOH_SSL_VERIFYHOST.html)
     */
    dohSslVerifyHost?: string | number | boolean | null;
    /**
     * Verify the DoH (DNS-over-HTTPS) SSL certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DOH_SSL_VERIFYPEER.html](https://curl.haxx.se/libcurl/c/CURLOPT_DOH_SSL_VERIFYPEER.html)
     */
    DOH_SSL_VERIFYPEER?: string | number | boolean | null;
    /**
     * Verify the DoH (DNS-over-HTTPS) SSL certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DOH_SSL_VERIFYPEER.html](https://curl.haxx.se/libcurl/c/CURLOPT_DOH_SSL_VERIFYPEER.html)
     */
    dohSslVerifyPeer?: string | number | boolean | null;
    /**
     * Verify the DoH (DNS-over-HTTPS) SSL certificate's status.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DOH_SSL_VERIFYSTATUS.html](https://curl.haxx.se/libcurl/c/CURLOPT_DOH_SSL_VERIFYSTATUS.html)
     */
    DOH_SSL_VERIFYSTATUS?: string | number | boolean | null;
    /**
     * Verify the DoH (DNS-over-HTTPS) SSL certificate's status.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DOH_SSL_VERIFYSTATUS.html](https://curl.haxx.se/libcurl/c/CURLOPT_DOH_SSL_VERIFYSTATUS.html)
     */
    dohSslVerifyStatus?: string | number | boolean | null;
    /**
     * Use this DoH server for name resolves.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DOH_URL.html](https://curl.haxx.se/libcurl/c/CURLOPT_DOH_URL.html)
     */
    DOH_URL?: string | number | boolean | null;
    /**
     * Use this DoH server for name resolves.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_DOH_URL.html](https://curl.haxx.se/libcurl/c/CURLOPT_DOH_URL.html)
     */
    dohUrl?: string | number | boolean | null;
    /**
     * Identify EGD socket for entropy.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_EGDSOCKET.html](https://curl.haxx.se/libcurl/c/CURLOPT_EGDSOCKET.html)
     */
    EGDSOCKET?: string | number | boolean | null;
    /**
     * Identify EGD socket for entropy.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_EGDSOCKET.html](https://curl.haxx.se/libcurl/c/CURLOPT_EGDSOCKET.html)
     */
    egdSocket?: string | number | boolean | null;
    /**
     * 100-continue timeout.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_EXPECT_100_TIMEOUT_MS.html](https://curl.haxx.se/libcurl/c/CURLOPT_EXPECT_100_TIMEOUT_MS.html)
     */
    EXPECT_100_TIMEOUT_MS?: string | number | boolean | null;
    /**
     * 100-continue timeout.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_EXPECT_100_TIMEOUT_MS.html](https://curl.haxx.se/libcurl/c/CURLOPT_EXPECT_100_TIMEOUT_MS.html)
     */
    expect100TimeoutMs?: string | number | boolean | null;
    /**
     * Fail on HTTP 4xx errors.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FAILONERROR.html](https://curl.haxx.se/libcurl/c/CURLOPT_FAILONERROR.html)
     */
    FAILONERROR?: string | number | boolean | null;
    /**
     * Fail on HTTP 4xx errors.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FAILONERROR.html](https://curl.haxx.se/libcurl/c/CURLOPT_FAILONERROR.html)
     */
    failOnError?: string | number | boolean | null;
    /**
     * Request file modification date and time.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FILETIME.html](https://curl.haxx.se/libcurl/c/CURLOPT_FILETIME.html)
     */
    FILETIME?: string | number | boolean | null;
    /**
     * Request file modification date and time.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FILETIME.html](https://curl.haxx.se/libcurl/c/CURLOPT_FILETIME.html)
     */
    fileTime?: string | number | boolean | null;
    /**
     * Callback for wildcard matching.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FNMATCH_FUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_FNMATCH_FUNCTION.html)
     */
    FNMATCH_FUNCTION?: ((this: EasyNativeBinding, pattern: string, value: string) => CurlFnMatchFunc) | null;
    /**
     * Callback for wildcard matching.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FNMATCH_FUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_FNMATCH_FUNCTION.html)
     */
    fnMatchFunction?: ((this: EasyNativeBinding, pattern: string, value: string) => CurlFnMatchFunc) | null;
    /**
     * Follow HTTP redirects.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FOLLOWLOCATION.html](https://curl.haxx.se/libcurl/c/CURLOPT_FOLLOWLOCATION.html)
     */
    FOLLOWLOCATION?: string | number | boolean | null;
    /**
     * Follow HTTP redirects.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FOLLOWLOCATION.html](https://curl.haxx.se/libcurl/c/CURLOPT_FOLLOWLOCATION.html)
     */
    followLocation?: string | number | boolean | null;
    /**
     * Prevent subsequent connections from re-using this.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FORBID_REUSE.html](https://curl.haxx.se/libcurl/c/CURLOPT_FORBID_REUSE.html)
     */
    FORBID_REUSE?: string | number | boolean | null;
    /**
     * Prevent subsequent connections from re-using this.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FORBID_REUSE.html](https://curl.haxx.se/libcurl/c/CURLOPT_FORBID_REUSE.html)
     */
    forbIdReuse?: string | number | boolean | null;
    /**
     * Use a new connection.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FRESH_CONNECT.html](https://curl.haxx.se/libcurl/c/CURLOPT_FRESH_CONNECT.html)
     */
    FRESH_CONNECT?: string | number | boolean | null;
    /**
     * Use a new connection.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FRESH_CONNECT.html](https://curl.haxx.se/libcurl/c/CURLOPT_FRESH_CONNECT.html)
     */
    freshConnect?: string | number | boolean | null;
    /**
     * Send ACCT command.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_ACCOUNT.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_ACCOUNT.html)
     */
    FTP_ACCOUNT?: string | number | boolean | null;
    /**
     * Send ACCT command.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_ACCOUNT.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_ACCOUNT.html)
     */
    ftpAccount?: string | number | boolean | null;
    /**
     * Alternative to USER.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_ALTERNATIVE_TO_USER.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_ALTERNATIVE_TO_USER.html)
     */
    FTP_ALTERNATIVE_TO_USER?: string | number | boolean | null;
    /**
     * Alternative to USER.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_ALTERNATIVE_TO_USER.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_ALTERNATIVE_TO_USER.html)
     */
    ftpAlternativeToUser?: string | number | boolean | null;
    /**
     * Create missing directories on the remote server.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_CREATE_MISSING_DIRS.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_CREATE_MISSING_DIRS.html)
     */
    FTP_CREATE_MISSING_DIRS?: string | number | boolean | null;
    /**
     * Create missing directories on the remote server.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_CREATE_MISSING_DIRS.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_CREATE_MISSING_DIRS.html)
     */
    ftpCreateMissingDirs?: string | number | boolean | null;
    /**
     * Specify how to reach files.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_FILEMETHOD.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_FILEMETHOD.html)
     */
    FTP_FILEMETHOD?: CurlFtpMethod | null;
    /**
     * Specify how to reach files.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_FILEMETHOD.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_FILEMETHOD.html)
     */
    ftpFileMethod?: CurlFtpMethod | null;
    /**
     * Timeout for FTP responses.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_RESPONSE_TIMEOUT.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_RESPONSE_TIMEOUT.html)
     */
    FTP_RESPONSE_TIMEOUT?: string | number | boolean | null;
    /**
     * Timeout for FTP responses.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_RESPONSE_TIMEOUT.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_RESPONSE_TIMEOUT.html)
     */
    ftpResponseTimeout?: string | number | boolean | null;
    /**
     * Ignore the IP address in the PASV response.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_SKIP_PASV_IP.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_SKIP_PASV_IP.html)
     */
    FTP_SKIP_PASV_IP?: string | number | boolean | null;
    /**
     * Ignore the IP address in the PASV response.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_SKIP_PASV_IP.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_SKIP_PASV_IP.html)
     */
    ftpSkipPasvIp?: string | number | boolean | null;
    /**
     * Back to non-TLS again after authentication.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_SSL_CCC.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_SSL_CCC.html)
     */
    FTP_SSL_CCC?: CurlFtpSsl | null;
    /**
     * Back to non-TLS again after authentication.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_SSL_CCC.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_SSL_CCC.html)
     */
    ftpSslCcc?: CurlFtpSsl | null;
    /**
     * Use EPTR.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_USE_EPRT.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_USE_EPRT.html)
     */
    FTP_USE_EPRT?: string | number | boolean | null;
    /**
     * Use EPTR.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_USE_EPRT.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_USE_EPRT.html)
     */
    ftpUseEprt?: string | number | boolean | null;
    /**
     * Use EPSV.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_USE_EPSV.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_USE_EPSV.html)
     */
    FTP_USE_EPSV?: string | number | boolean | null;
    /**
     * Use EPSV.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_USE_EPSV.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_USE_EPSV.html)
     */
    ftpUseEpsv?: string | number | boolean | null;
    /**
     * Use PRET.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_USE_PRET.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_USE_PRET.html)
     */
    FTP_USE_PRET?: string | number | boolean | null;
    /**
     * Use PRET.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTP_USE_PRET.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTP_USE_PRET.html)
     */
    ftpUsePret?: string | number | boolean | null;
    /**
     * Use active FTP.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTPPORT.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTPPORT.html)
     */
    FTPPORT?: string | number | boolean | null;
    /**
     * Use active FTP.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTPPORT.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTPPORT.html)
     */
    ftpPort?: string | number | boolean | null;
    /**
     * Control how to do TLS.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTPSSLAUTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTPSSLAUTH.html)
     */
    FTPSSLAUTH?: string | number | boolean | null;
    /**
     * Control how to do TLS.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_FTPSSLAUTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_FTPSSLAUTH.html)
     */
    ftpSslAuth?: string | number | boolean | null;
    /**
     * Disable GSS-API delegation.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_GSSAPI_DELEGATION.html](https://curl.haxx.se/libcurl/c/CURLOPT_GSSAPI_DELEGATION.html)
     */
    GSSAPI_DELEGATION?: CurlGssApi | null;
    /**
     * Disable GSS-API delegation.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_GSSAPI_DELEGATION.html](https://curl.haxx.se/libcurl/c/CURLOPT_GSSAPI_DELEGATION.html)
     */
    gssapiDelegation?: CurlGssApi | null;
    /**
     * Timeout for happy eyeballs.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HAPPY_EYEBALLS_TIMEOUT_MS.html](https://curl.haxx.se/libcurl/c/CURLOPT_HAPPY_EYEBALLS_TIMEOUT_MS.html)
     */
    HAPPY_EYEBALLS_TIMEOUT_MS?: string | number | boolean | null;
    /**
     * Timeout for happy eyeballs.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HAPPY_EYEBALLS_TIMEOUT_MS.html](https://curl.haxx.se/libcurl/c/CURLOPT_HAPPY_EYEBALLS_TIMEOUT_MS.html)
     */
    happyEyeballsTimeoutMs?: string | number | boolean | null;
    /**
     * Send an HAProxy PROXY protocol v1 header.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HAPROXYPROTOCOL.html](https://curl.haxx.se/libcurl/c/CURLOPT_HAPROXYPROTOCOL.html)
     */
    HAPROXYPROTOCOL?: string | number | boolean | null;
    /**
     * Send an HAProxy PROXY protocol v1 header.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HAPROXYPROTOCOL.html](https://curl.haxx.se/libcurl/c/CURLOPT_HAPROXYPROTOCOL.html)
     */
    haProxyProtocol?: string | number | boolean | null;
    /**
     * Include the header in the body output.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HEADER.html](https://curl.haxx.se/libcurl/c/CURLOPT_HEADER.html)
     */
    HEADER?: string | number | boolean | null;
    /**
     * Include the header in the body output.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HEADER.html](https://curl.haxx.se/libcurl/c/CURLOPT_HEADER.html)
     */
    header?: string | number | boolean | null;
    /**
     * Callback for writing received headers.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HEADERFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_HEADERFUNCTION.html)
     */
    HEADERFUNCTION?: ((this: EasyNativeBinding, data: Buffer, size: number, nmemb: number) => number) | null;
    /**
     * Callback for writing received headers.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HEADERFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_HEADERFUNCTION.html)
     */
    headerFunction?: ((this: EasyNativeBinding, data: Buffer, size: number, nmemb: number) => number) | null;
    /**
     * Control custom headers.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HEADEROPT.html](https://curl.haxx.se/libcurl/c/CURLOPT_HEADEROPT.html)
     */
    HEADEROPT?: CurlHeader | null;
    /**
     * Control custom headers.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HEADEROPT.html](https://curl.haxx.se/libcurl/c/CURLOPT_HEADEROPT.html)
     */
    headerOpt?: CurlHeader | null;
    /**
     * Set HSTS cache file.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HSTS.html](https://curl.haxx.se/libcurl/c/CURLOPT_HSTS.html)
     */
    HSTS?: string | number | boolean | null;
    /**
     * Set HSTS cache file.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HSTS.html](https://curl.haxx.se/libcurl/c/CURLOPT_HSTS.html)
     */
    hsts?: string | number | boolean | null;
    /**
     * Enable HSTS.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HSTS_CTRL.html](https://curl.haxx.se/libcurl/c/CURLOPT_HSTS_CTRL.html)
     */
    HSTS_CTRL?: CurlHsts | null;
    /**
     * Enable HSTS.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HSTS_CTRL.html](https://curl.haxx.se/libcurl/c/CURLOPT_HSTS_CTRL.html)
     */
    hstsCtrl?: CurlHsts | null;
    /**
     * Set HSTS read callback.
     *
     * You can either return a single `CurlHstsReadCallbackResult` object or an array of `CurlHstsReadCallbackResult` objects.
     * If returning an array, the callback will only be called once per request.
     * If returning a single object, the callback will be called multiple times until `null` is returned.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HSTSREADFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_HSTSREADFUNCTION.html)
     */
    HSTSREADFUNCTION?: ((this: EasyNativeBinding) => null | CurlHstsCacheEntry | CurlHstsCacheEntry[]) | null;
    /**
     * Set HSTS read callback.
     *
     * You can either return a single `CurlHstsReadCallbackResult` object or an array of `CurlHstsReadCallbackResult` objects.
     * If returning an array, the callback will only be called once per request.
     * If returning a single object, the callback will be called multiple times until `null` is returned.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HSTSREADFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_HSTSREADFUNCTION.html)
     */
    hstsReadFunction?: ((this: EasyNativeBinding) => null | CurlHstsCacheEntry | CurlHstsCacheEntry[]) | null;
    /**
     * Set HSTS write callback.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HSTSWRITEFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_HSTSWRITEFUNCTION.html)
     */
    HSTSWRITEFUNCTION?: ((this: EasyNativeBinding, cacheEntry: CurlHstsCacheEntry, cacheCount: CurlHstsCacheCount) => any) | null;
    /**
     * Set HSTS write callback.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HSTSWRITEFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_HSTSWRITEFUNCTION.html)
     */
    hstsWriteFunction?: ((this: EasyNativeBinding, cacheEntry: CurlHstsCacheEntry, cacheCount: CurlHstsCacheCount) => any) | null;
    /**
     * Disable Content decoding.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTP_CONTENT_DECODING.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTP_CONTENT_DECODING.html)
     */
    HTTP_CONTENT_DECODING?: string | number | boolean | null;
    /**
     * Disable Content decoding.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTP_CONTENT_DECODING.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTP_CONTENT_DECODING.html)
     */
    httpContentDecoding?: string | number | boolean | null;
    /**
     * Disable Transfer decoding.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTP_TRANSFER_DECODING.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTP_TRANSFER_DECODING.html)
     */
    HTTP_TRANSFER_DECODING?: string | number | boolean | null;
    /**
     * Disable Transfer decoding.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTP_TRANSFER_DECODING.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTP_TRANSFER_DECODING.html)
     */
    httpTransferDecoding?: string | number | boolean | null;
    /**
     * HTTP version to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTP_VERSION.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTP_VERSION.html)
     */
    HTTP_VERSION?: CurlHttpVersion | null;
    /**
     * HTTP version to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTP_VERSION.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTP_VERSION.html)
     */
    httpVersion?: CurlHttpVersion | null;
    /**
     * Allow HTTP/0.9 responses.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTP09_ALLOWED.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTP09_ALLOWED.html)
     */
    HTTP09_ALLOWED?: string | number | boolean | null;
    /**
     * Allow HTTP/0.9 responses.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTP09_ALLOWED.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTP09_ALLOWED.html)
     */
    http09Allowed?: string | number | boolean | null;
    /**
     * Alternative versions of 200 OK.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTP200ALIASES.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTP200ALIASES.html)
     */
    HTTP200ALIASES?: string[] | null;
    /**
     * Alternative versions of 200 OK.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTP200ALIASES.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTP200ALIASES.html)
     */
    http200aliases?: string[] | null;
    /**
     * HTTP server authentication methods.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTPAUTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTPAUTH.html)
     */
    HTTPAUTH?: string | number | boolean | null;
    /**
     * HTTP server authentication methods.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTPAUTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTPAUTH.html)
     */
    httpAuth?: string | number | boolean | null;
    /**
     * Do an HTTP GET request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTPGET.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTPGET.html)
     */
    HTTPGET?: string | number | boolean | null;
    /**
     * Do an HTTP GET request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTPGET.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTPGET.html)
     */
    httpGet?: string | number | boolean | null;
    /**
     * Custom HTTP headers.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTPHEADER.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTPHEADER.html)
     */
    HTTPHEADER?: string[] | null;
    /**
     * Custom HTTP headers.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTPHEADER.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTPHEADER.html)
     */
    httpHeader?: string[] | null;
    /**
     * Multipart formpost HTTP POST.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTPPOST.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTPPOST.html)
     */
    HTTPPOST?: HttpPostField[] | null;
    /**
     * Multipart formpost HTTP POST.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTPPOST.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTPPOST.html)
     */
    httpPost?: HttpPostField[] | null;
    /**
     * Tunnel through the HTTP proxy.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTPPROXYTUNNEL.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTPPROXYTUNNEL.html)
     */
    HTTPPROXYTUNNEL?: string | number | boolean | null;
    /**
     * Tunnel through the HTTP proxy.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_HTTPPROXYTUNNEL.html](https://curl.haxx.se/libcurl/c/CURLOPT_HTTPPROXYTUNNEL.html)
     */
    httpProxyTunnel?: string | number | boolean | null;
    /**
     * Ignore Content-Length.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_IGNORE_CONTENT_LENGTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_IGNORE_CONTENT_LENGTH.html)
     */
    IGNORE_CONTENT_LENGTH?: string | number | boolean | null;
    /**
     * Ignore Content-Length.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_IGNORE_CONTENT_LENGTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_IGNORE_CONTENT_LENGTH.html)
     */
    ignoreContentLength?: string | number | boolean | null;
    /**
     * Size of file to send.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_INFILESIZE.html](https://curl.haxx.se/libcurl/c/CURLOPT_INFILESIZE.html)
     */
    INFILESIZE?: string | number | boolean | null;
    /**
     * Size of file to send.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_INFILESIZE.html](https://curl.haxx.se/libcurl/c/CURLOPT_INFILESIZE.html)
     */
    inFileSize?: string | number | boolean | null;
    /**
     * Size of file to send.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_INFILESIZE_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_INFILESIZE_LARGE.html)
     */
    INFILESIZE_LARGE?: string | number | boolean | null;
    /**
     * Size of file to send.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_INFILESIZE_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_INFILESIZE_LARGE.html)
     */
    inFileSizeLarge?: string | number | boolean | null;
    /**
     * Bind connection locally to this.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_INTERFACE.html](https://curl.haxx.se/libcurl/c/CURLOPT_INTERFACE.html)
     */
    INTERFACE?: string | number | boolean | null;
    /**
     * Bind connection locally to this.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_INTERFACE.html](https://curl.haxx.se/libcurl/c/CURLOPT_INTERFACE.html)
     */
    interface?: string | number | boolean | null;
    /**
     * IP version to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_IPRESOLVE.html](https://curl.haxx.se/libcurl/c/CURLOPT_IPRESOLVE.html)
     */
    IPRESOLVE?: CurlIpResolve | null;
    /**
     * IP version to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_IPRESOLVE.html](https://curl.haxx.se/libcurl/c/CURLOPT_IPRESOLVE.html)
     */
    ipResolve?: CurlIpResolve | null;
    /**
     * Issuer certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ISSUERCERT.html](https://curl.haxx.se/libcurl/c/CURLOPT_ISSUERCERT.html)
     */
    ISSUERCERT?: string | number | boolean | null;
    /**
     * Issuer certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ISSUERCERT.html](https://curl.haxx.se/libcurl/c/CURLOPT_ISSUERCERT.html)
     */
    issuerCert?: string | number | boolean | null;
    /**
     * Issuer certificate memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ISSUERCERT_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_ISSUERCERT_BLOB.html)
     */
    ISSUERCERT_BLOB?: ArrayBuffer | Buffer | string | null;
    /**
     * Issuer certificate memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_ISSUERCERT_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_ISSUERCERT_BLOB.html)
     */
    issuerCertBlob?: ArrayBuffer | Buffer | string | null;
    /**
     * Keep sending on HTTP \>= 300 errors.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_KEEP_SENDING_ON_ERROR.html](https://curl.haxx.se/libcurl/c/CURLOPT_KEEP_SENDING_ON_ERROR.html)
     */
    KEEP_SENDING_ON_ERROR?: string | number | boolean | null;
    /**
     * Keep sending on HTTP \>= 300 errors.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_KEEP_SENDING_ON_ERROR.html](https://curl.haxx.se/libcurl/c/CURLOPT_KEEP_SENDING_ON_ERROR.html)
     */
    keepSendingOnError?: string | number | boolean | null;
    /**
     * Client key password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_KEYPASSWD.html](https://curl.haxx.se/libcurl/c/CURLOPT_KEYPASSWD.html)
     */
    KEYPASSWD?: string | number | boolean | null;
    /**
     * Client key password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_KEYPASSWD.html](https://curl.haxx.se/libcurl/c/CURLOPT_KEYPASSWD.html)
     */
    keyPasswd?: string | number | boolean | null;
    /**
     * Kerberos security level.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_KRBLEVEL.html](https://curl.haxx.se/libcurl/c/CURLOPT_KRBLEVEL.html)
     */
    KRBLEVEL?: string | number | boolean | null;
    /**
     * Kerberos security level.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_KRBLEVEL.html](https://curl.haxx.se/libcurl/c/CURLOPT_KRBLEVEL.html)
     */
    krbLevel?: string | number | boolean | null;
    /**
     * Bind connection locally to this port.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_LOCALPORT.html](https://curl.haxx.se/libcurl/c/CURLOPT_LOCALPORT.html)
     */
    LOCALPORT?: string | number | boolean | null;
    /**
     * Bind connection locally to this port.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_LOCALPORT.html](https://curl.haxx.se/libcurl/c/CURLOPT_LOCALPORT.html)
     */
    localPort?: string | number | boolean | null;
    /**
     * Bind connection locally to port range.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_LOCALPORTRANGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_LOCALPORTRANGE.html)
     */
    LOCALPORTRANGE?: string | number | boolean | null;
    /**
     * Bind connection locally to port range.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_LOCALPORTRANGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_LOCALPORTRANGE.html)
     */
    localPortRange?: string | number | boolean | null;
    /**
     * Login options.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_LOGIN_OPTIONS.html](https://curl.haxx.se/libcurl/c/CURLOPT_LOGIN_OPTIONS.html)
     */
    LOGIN_OPTIONS?: string | number | boolean | null;
    /**
     * Login options.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_LOGIN_OPTIONS.html](https://curl.haxx.se/libcurl/c/CURLOPT_LOGIN_OPTIONS.html)
     */
    loginOptions?: string | number | boolean | null;
    /**
     * Low speed limit to abort transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_LOW_SPEED_LIMIT.html](https://curl.haxx.se/libcurl/c/CURLOPT_LOW_SPEED_LIMIT.html)
     */
    LOW_SPEED_LIMIT?: string | number | boolean | null;
    /**
     * Low speed limit to abort transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_LOW_SPEED_LIMIT.html](https://curl.haxx.se/libcurl/c/CURLOPT_LOW_SPEED_LIMIT.html)
     */
    lowSpeedLimit?: string | number | boolean | null;
    /**
     * Time to be below the speed to trigger low speed abort.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_LOW_SPEED_TIME.html](https://curl.haxx.se/libcurl/c/CURLOPT_LOW_SPEED_TIME.html)
     */
    LOW_SPEED_TIME?: string | number | boolean | null;
    /**
     * Time to be below the speed to trigger low speed abort.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_LOW_SPEED_TIME.html](https://curl.haxx.se/libcurl/c/CURLOPT_LOW_SPEED_TIME.html)
     */
    lowSpeedTime?: string | number | boolean | null;
    /**
     * Authentication address.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_AUTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_AUTH.html)
     */
    MAIL_AUTH?: string | number | boolean | null;
    /**
     * Authentication address.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_AUTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_AUTH.html)
     */
    mailAuth?: string | number | boolean | null;
    /**
     * Address of the sender.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_FROM.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_FROM.html)
     */
    MAIL_FROM?: string | number | boolean | null;
    /**
     * Address of the sender.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_FROM.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_FROM.html)
     */
    mailFrom?: string | number | boolean | null;
    /**
     * Address of the recipients.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_RCPT.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_RCPT.html)
     */
    MAIL_RCPT?: string[] | null;
    /**
     * Address of the recipients.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_RCPT.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_RCPT.html)
     */
    mailRcpt?: string[] | null;
    /**
     * Allow RCPT TO command to fail for some recipients.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_RCPT_ALLLOWFAILS.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_RCPT_ALLLOWFAILS.html)
     */
    MAIL_RCPT_ALLLOWFAILS?: string | number | boolean | null;
    /**
     * Allow RCPT TO command to fail for some recipients.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_RCPT_ALLLOWFAILS.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAIL_RCPT_ALLLOWFAILS.html)
     */
    mailRcptAlllowfails?: string | number | boolean | null;
    /**
     * Cap the download speed to this.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAX_RECV_SPEED_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAX_RECV_SPEED_LARGE.html)
     */
    MAX_RECV_SPEED_LARGE?: string | number | boolean | null;
    /**
     * Cap the download speed to this.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAX_RECV_SPEED_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAX_RECV_SPEED_LARGE.html)
     */
    maxRecvSpeedLarge?: string | number | boolean | null;
    /**
     * Cap the upload speed to this.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAX_SEND_SPEED_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAX_SEND_SPEED_LARGE.html)
     */
    MAX_SEND_SPEED_LARGE?: string | number | boolean | null;
    /**
     * Cap the upload speed to this.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAX_SEND_SPEED_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAX_SEND_SPEED_LARGE.html)
     */
    maxSendSpeedLarge?: string | number | boolean | null;
    /**
     * Limit the age (idle time) of connections for reuse.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAXAGE_CONN.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAXAGE_CONN.html)
     */
    MAXAGE_CONN?: string | number | boolean | null;
    /**
     * Limit the age (idle time) of connections for reuse.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAXAGE_CONN.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAXAGE_CONN.html)
     */
    maxAgeConn?: string | number | boolean | null;
    /**
     * Maximum number of connections in the connection pool.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAXCONNECTS.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAXCONNECTS.html)
     */
    MAXCONNECTS?: string | number | boolean | null;
    /**
     * Maximum number of connections in the connection pool.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAXCONNECTS.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAXCONNECTS.html)
     */
    maxConnects?: string | number | boolean | null;
    /**
     * Maximum file size to get.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAXFILESIZE.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAXFILESIZE.html)
     */
    MAXFILESIZE?: string | number | boolean | null;
    /**
     * Maximum file size to get.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAXFILESIZE.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAXFILESIZE.html)
     */
    maxFileSize?: string | number | boolean | null;
    /**
     * Maximum file size to get.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAXFILESIZE_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAXFILESIZE_LARGE.html)
     */
    MAXFILESIZE_LARGE?: string | number | boolean | null;
    /**
     * Maximum file size to get.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAXFILESIZE_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAXFILESIZE_LARGE.html)
     */
    maxFileSizeLarge?: string | number | boolean | null;
    /**
     * Limit the age (since creation) of connections for reuse.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAXLIFETIME_CONN.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAXLIFETIME_CONN.html)
     */
    MAXLIFETIME_CONN?: string | number | boolean | null;
    /**
     * Limit the age (since creation) of connections for reuse.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAXLIFETIME_CONN.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAXLIFETIME_CONN.html)
     */
    maxlifeTimeConn?: string | number | boolean | null;
    /**
     * Maximum number of redirects to follow.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAXREDIRS.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAXREDIRS.html)
     */
    MAXREDIRS?: string | number | boolean | null;
    /**
     * Maximum number of redirects to follow.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MAXREDIRS.html](https://curl.haxx.se/libcurl/c/CURLOPT_MAXREDIRS.html)
     */
    maxRedirs?: string | number | boolean | null;
    /**
     * Set MIME option flags.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MIME_OPTIONS.html](https://curl.haxx.se/libcurl/c/CURLOPT_MIME_OPTIONS.html)
     */
    MIME_OPTIONS?: string | number | boolean | null;
    /**
     * Set MIME option flags.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MIME_OPTIONS.html](https://curl.haxx.se/libcurl/c/CURLOPT_MIME_OPTIONS.html)
     */
    mimeOptions?: string | number | boolean | null;
    /**
     * Post/send MIME data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MIMEPOST.html](https://curl.haxx.se/libcurl/c/CURLOPT_MIMEPOST.html)
     */
    MIMEPOST?: string | number | boolean | null;
    /**
     * Post/send MIME data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_MIMEPOST.html](https://curl.haxx.se/libcurl/c/CURLOPT_MIMEPOST.html)
     */
    mimePost?: string | number | boolean | null;
    /**
     * Enable .netrc parsing.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NETRC.html](https://curl.haxx.se/libcurl/c/CURLOPT_NETRC.html)
     */
    NETRC?: CurlNetrc | null;
    /**
     * Enable .netrc parsing.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NETRC.html](https://curl.haxx.se/libcurl/c/CURLOPT_NETRC.html)
     */
    netrc?: CurlNetrc | null;
    /**
     * .netrc file name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NETRC_FILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_NETRC_FILE.html)
     */
    NETRC_FILE?: string | number | boolean | null;
    /**
     * .netrc file name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NETRC_FILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_NETRC_FILE.html)
     */
    netrcFile?: string | number | boolean | null;
    /**
     * Mode for creating new remote directories.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NEW_DIRECTORY_PERMS.html](https://curl.haxx.se/libcurl/c/CURLOPT_NEW_DIRECTORY_PERMS.html)
     */
    NEW_DIRECTORY_PERMS?: string | number | boolean | null;
    /**
     * Mode for creating new remote directories.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NEW_DIRECTORY_PERMS.html](https://curl.haxx.se/libcurl/c/CURLOPT_NEW_DIRECTORY_PERMS.html)
     */
    newDirectoryPerms?: string | number | boolean | null;
    /**
     * Mode for creating new remote files.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NEW_FILE_PERMS.html](https://curl.haxx.se/libcurl/c/CURLOPT_NEW_FILE_PERMS.html)
     */
    NEW_FILE_PERMS?: string | number | boolean | null;
    /**
     * Mode for creating new remote files.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NEW_FILE_PERMS.html](https://curl.haxx.se/libcurl/c/CURLOPT_NEW_FILE_PERMS.html)
     */
    newFilePerms?: string | number | boolean | null;
    /**
     * Do not get the body contents.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NOBODY.html](https://curl.haxx.se/libcurl/c/CURLOPT_NOBODY.html)
     */
    NOBODY?: string | number | boolean | null;
    /**
     * Do not get the body contents.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NOBODY.html](https://curl.haxx.se/libcurl/c/CURLOPT_NOBODY.html)
     */
    nobody?: string | number | boolean | null;
    /**
     * Shut off the progress meter.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NOPROGRESS.html](https://curl.haxx.se/libcurl/c/CURLOPT_NOPROGRESS.html)
     */
    NOPROGRESS?: string | number | boolean | null;
    /**
     * Shut off the progress meter.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NOPROGRESS.html](https://curl.haxx.se/libcurl/c/CURLOPT_NOPROGRESS.html)
     */
    noProgress?: string | number | boolean | null;
    /**
     * Filter out hosts from proxy use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NOPROXY.html](https://curl.haxx.se/libcurl/c/CURLOPT_NOPROXY.html)
     */
    NOPROXY?: string | number | boolean | null;
    /**
     * Filter out hosts from proxy use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NOPROXY.html](https://curl.haxx.se/libcurl/c/CURLOPT_NOPROXY.html)
     */
    noProxy?: string | number | boolean | null;
    /**
     * Do not install signal handlers.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NOSIGNAL.html](https://curl.haxx.se/libcurl/c/CURLOPT_NOSIGNAL.html)
     */
    NOSIGNAL?: string | number | boolean | null;
    /**
     * Do not install signal handlers.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_NOSIGNAL.html](https://curl.haxx.se/libcurl/c/CURLOPT_NOSIGNAL.html)
     */
    noSignal?: string | number | boolean | null;
    /**
     * Password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PASSWORD.html](https://curl.haxx.se/libcurl/c/CURLOPT_PASSWORD.html)
     */
    PASSWORD?: string | number | boolean | null;
    /**
     * Password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PASSWORD.html](https://curl.haxx.se/libcurl/c/CURLOPT_PASSWORD.html)
     */
    password?: string | number | boolean | null;
    /**
     * Disable squashing /../ and /./ sequences in the path.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PATH_AS_IS.html](https://curl.haxx.se/libcurl/c/CURLOPT_PATH_AS_IS.html)
     */
    PATH_AS_IS?: string | number | boolean | null;
    /**
     * Disable squashing /../ and /./ sequences in the path.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PATH_AS_IS.html](https://curl.haxx.se/libcurl/c/CURLOPT_PATH_AS_IS.html)
     */
    pathAsIs?: string | number | boolean | null;
    /**
     * Set pinned SSL public key .
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PINNEDPUBLICKEY.html](https://curl.haxx.se/libcurl/c/CURLOPT_PINNEDPUBLICKEY.html)
     */
    PINNEDPUBLICKEY?: string | number | boolean | null;
    /**
     * Set pinned SSL public key .
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PINNEDPUBLICKEY.html](https://curl.haxx.se/libcurl/c/CURLOPT_PINNEDPUBLICKEY.html)
     */
    pinnedPublicKey?: string | number | boolean | null;
    /**
     * Wait on connection to pipeline on it.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PIPEWAIT.html](https://curl.haxx.se/libcurl/c/CURLOPT_PIPEWAIT.html)
     */
    PIPEWAIT?: string | number | boolean | null;
    /**
     * Wait on connection to pipeline on it.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PIPEWAIT.html](https://curl.haxx.se/libcurl/c/CURLOPT_PIPEWAIT.html)
     */
    pipeWait?: string | number | boolean | null;
    /**
     * Port number to connect to.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PORT.html](https://curl.haxx.se/libcurl/c/CURLOPT_PORT.html)
     */
    PORT?: string | number | boolean | null;
    /**
     * Port number to connect to.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PORT.html](https://curl.haxx.se/libcurl/c/CURLOPT_PORT.html)
     */
    port?: string | number | boolean | null;
    /**
     * Issue an HTTP POST request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_POST.html](https://curl.haxx.se/libcurl/c/CURLOPT_POST.html)
     */
    POST?: string | number | boolean | null;
    /**
     * Issue an HTTP POST request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_POST.html](https://curl.haxx.se/libcurl/c/CURLOPT_POST.html)
     */
    post?: string | number | boolean | null;
    /**
     * Send a POST with this data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_POSTFIELDS.html](https://curl.haxx.se/libcurl/c/CURLOPT_POSTFIELDS.html)
     */
    POSTFIELDS?: string | number | boolean | null;
    /**
     * Send a POST with this data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_POSTFIELDS.html](https://curl.haxx.se/libcurl/c/CURLOPT_POSTFIELDS.html)
     */
    postFields?: string | number | boolean | null;
    /**
     * The POST data is this big.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_POSTFIELDSIZE.html](https://curl.haxx.se/libcurl/c/CURLOPT_POSTFIELDSIZE.html)
     */
    POSTFIELDSIZE?: string | number | boolean | null;
    /**
     * The POST data is this big.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_POSTFIELDSIZE.html](https://curl.haxx.se/libcurl/c/CURLOPT_POSTFIELDSIZE.html)
     */
    postFieldSize?: string | number | boolean | null;
    /**
     * The POST data is this big.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_POSTFIELDSIZE_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_POSTFIELDSIZE_LARGE.html)
     */
    POSTFIELDSIZE_LARGE?: string | number | boolean | null;
    /**
     * The POST data is this big.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_POSTFIELDSIZE_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_POSTFIELDSIZE_LARGE.html)
     */
    postFieldSizeLarge?: string | number | boolean | null;
    /**
     * Commands to run after transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_POSTQUOTE.html](https://curl.haxx.se/libcurl/c/CURLOPT_POSTQUOTE.html)
     */
    POSTQUOTE?: string[] | null;
    /**
     * Commands to run after transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_POSTQUOTE.html](https://curl.haxx.se/libcurl/c/CURLOPT_POSTQUOTE.html)
     */
    postQuote?: string[] | null;
    /**
     * How to act on redirects after POST.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_POSTREDIR.html](https://curl.haxx.se/libcurl/c/CURLOPT_POSTREDIR.html)
     */
    POSTREDIR?: string | number | boolean | null;
    /**
     * How to act on redirects after POST.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_POSTREDIR.html](https://curl.haxx.se/libcurl/c/CURLOPT_POSTREDIR.html)
     */
    postRedir?: string | number | boolean | null;
    /**
     * Socks proxy to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PRE_PROXY.html](https://curl.haxx.se/libcurl/c/CURLOPT_PRE_PROXY.html)
     */
    PRE_PROXY?: string | number | boolean | null;
    /**
     * Socks proxy to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PRE_PROXY.html](https://curl.haxx.se/libcurl/c/CURLOPT_PRE_PROXY.html)
     */
    preProxy?: string | number | boolean | null;
    /**
     * Commands to run just before transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PREQUOTE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PREQUOTE.html)
     */
    PREQUOTE?: string[] | null;
    /**
     * Commands to run just before transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PREQUOTE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PREQUOTE.html)
     */
    preQuote?: string[] | null;
    /**
     * Data pointer to pass to the CURLOPT_PREREQFUNCTION callback.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PREREQDATA.html](https://curl.haxx.se/libcurl/c/CURLOPT_PREREQDATA.html)
     */
    PREREQDATA?: string | number | boolean | null;
    /**
     * Data pointer to pass to the CURLOPT_PREREQFUNCTION callback.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PREREQDATA.html](https://curl.haxx.se/libcurl/c/CURLOPT_PREREQDATA.html)
     */
    prereqData?: string | number | boolean | null;
    /**
     * Callback to be called after a connection is established but before a request is made on that connection.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PREREQFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_PREREQFUNCTION.html)
     */
    PREREQFUNCTION?: string | number | boolean | null;
    /**
     * Callback to be called after a connection is established but before a request is made on that connection.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PREREQFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_PREREQFUNCTION.html)
     */
    prereqFunction?: string | number | boolean | null;
    /**
     * OBSOLETE callback for progress meter.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROGRESSFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROGRESSFUNCTION.html)
     */
    PROGRESSFUNCTION?: ((this: EasyNativeBinding, dltotal: number, dlnow: number, ultotal: number, ulnow: number) => number | CurlProgressFunc) | null;
    /**
     * OBSOLETE callback for progress meter.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROGRESSFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROGRESSFUNCTION.html)
     */
    progressFunction?: ((this: EasyNativeBinding, dltotal: number, dlnow: number, ultotal: number, ulnow: number) => number | CurlProgressFunc) | null;
    /**
     * Allowed protocols.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROTOCOLS.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROTOCOLS.html)
     */
    PROTOCOLS?: CurlProtocol | null;
    /**
     * Allowed protocols.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROTOCOLS.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROTOCOLS.html)
     */
    protocols?: CurlProtocol | null;
    /**
     * Proxy to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY.html)
     */
    PROXY?: string | number | boolean | null;
    /**
     * Proxy to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY.html)
     */
    proxy?: string | number | boolean | null;
    /**
     * Proxy CA cert bundle.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CAINFO.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CAINFO.html)
     */
    PROXY_CAINFO?: string | number | boolean | null;
    /**
     * Proxy CA cert bundle.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CAINFO.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CAINFO.html)
     */
    proxyCaInfo?: string | number | boolean | null;
    /**
     * Proxy CA cert bundle memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CAINFO_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CAINFO_BLOB.html)
     */
    PROXY_CAINFO_BLOB?: ArrayBuffer | Buffer | string | null;
    /**
     * Proxy CA cert bundle memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CAINFO_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CAINFO_BLOB.html)
     */
    proxyCaInfoBlob?: ArrayBuffer | Buffer | string | null;
    /**
     * Path to proxy CA cert bundle.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CAPATH.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CAPATH.html)
     */
    PROXY_CAPATH?: string | number | boolean | null;
    /**
     * Path to proxy CA cert bundle.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CAPATH.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CAPATH.html)
     */
    proxyCaPath?: string | number | boolean | null;
    /**
     * Proxy Certificate Revocation List.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CRLFILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CRLFILE.html)
     */
    PROXY_CRLFILE?: string | number | boolean | null;
    /**
     * Proxy Certificate Revocation List.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CRLFILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_CRLFILE.html)
     */
    proxyCrlFile?: string | number | boolean | null;
    /**
     * Proxy issuer certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_ISSUERCERT.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_ISSUERCERT.html)
     */
    PROXY_ISSUERCERT?: string | number | boolean | null;
    /**
     * Proxy issuer certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_ISSUERCERT.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_ISSUERCERT.html)
     */
    proxyIssuerCert?: string | number | boolean | null;
    /**
     * Proxy issuer certificate memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_ISSUERCERT_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_ISSUERCERT_BLOB.html)
     */
    PROXY_ISSUERCERT_BLOB?: string | number | boolean | null;
    /**
     * Proxy issuer certificate memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_ISSUERCERT_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_ISSUERCERT_BLOB.html)
     */
    proxyIssuerCertBlob?: string | number | boolean | null;
    /**
     * Proxy client key password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_KEYPASSWD.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_KEYPASSWD.html)
     */
    PROXY_KEYPASSWD?: string | number | boolean | null;
    /**
     * Proxy client key password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_KEYPASSWD.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_KEYPASSWD.html)
     */
    proxyKeyPasswd?: string | number | boolean | null;
    /**
     * Set the proxy's pinned SSL public key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_PINNEDPUBLICKEY.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_PINNEDPUBLICKEY.html)
     */
    PROXY_PINNEDPUBLICKEY?: string | number | boolean | null;
    /**
     * Set the proxy's pinned SSL public key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_PINNEDPUBLICKEY.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_PINNEDPUBLICKEY.html)
     */
    proxyPinnedPublicKey?: string | number | boolean | null;
    /**
     * Proxy authentication service name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SERVICE_NAME.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SERVICE_NAME.html)
     */
    PROXY_SERVICE_NAME?: string | number | boolean | null;
    /**
     * Proxy authentication service name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SERVICE_NAME.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SERVICE_NAME.html)
     */
    proxyServiceName?: string | number | boolean | null;
    /**
     * Proxy ciphers to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_CIPHER_LIST.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_CIPHER_LIST.html)
     */
    PROXY_SSL_CIPHER_LIST?: string | number | boolean | null;
    /**
     * Proxy ciphers to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_CIPHER_LIST.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_CIPHER_LIST.html)
     */
    proxySslCipherList?: string | number | boolean | null;
    /**
     * Control proxy SSL behavior.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_OPTIONS.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_OPTIONS.html)
     */
    PROXY_SSL_OPTIONS?: CurlSslOpt | null;
    /**
     * Control proxy SSL behavior.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_OPTIONS.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_OPTIONS.html)
     */
    proxySslOptions?: CurlSslOpt | null;
    /**
     * Verify the host name in the proxy SSL certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_VERIFYHOST.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_VERIFYHOST.html)
     */
    PROXY_SSL_VERIFYHOST?: string | number | boolean | null;
    /**
     * Verify the host name in the proxy SSL certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_VERIFYHOST.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_VERIFYHOST.html)
     */
    proxySslVerifyHost?: string | number | boolean | null;
    /**
     * Verify the proxy SSL certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_VERIFYPEER.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_VERIFYPEER.html)
     */
    PROXY_SSL_VERIFYPEER?: string | number | boolean | null;
    /**
     * Verify the proxy SSL certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_VERIFYPEER.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSL_VERIFYPEER.html)
     */
    proxySslVerifyPeer?: string | number | boolean | null;
    /**
     * Proxy client cert.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLCERT.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLCERT.html)
     */
    PROXY_SSLCERT?: ArrayBuffer | Buffer | string | null;
    /**
     * Proxy client cert.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLCERT.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLCERT.html)
     */
    proxySslCert?: ArrayBuffer | Buffer | string | null;
    /**
     * Proxy client cert memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLCERT_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLCERT_BLOB.html)
     */
    PROXY_SSLCERT_BLOB?: ArrayBuffer | Buffer | string | null;
    /**
     * Proxy client cert memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLCERT_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLCERT_BLOB.html)
     */
    proxySslCertBlob?: ArrayBuffer | Buffer | string | null;
    /**
     * Proxy client cert type.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLCERTTYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLCERTTYPE.html)
     */
    PROXY_SSLCERTTYPE?: string | number | boolean | null;
    /**
     * Proxy client cert type.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLCERTTYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLCERTTYPE.html)
     */
    proxySslCertType?: string | number | boolean | null;
    /**
     * Proxy client key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLKEY.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLKEY.html)
     */
    PROXY_SSLKEY?: string | number | boolean | null;
    /**
     * Proxy client key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLKEY.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLKEY.html)
     */
    proxySslKey?: string | number | boolean | null;
    /**
     * Proxy client key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLKEY_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLKEY_BLOB.html)
     */
    PROXY_SSLKEY_BLOB?: ArrayBuffer | Buffer | string | null;
    /**
     * Proxy client key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLKEY_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLKEY_BLOB.html)
     */
    proxySslKeyBlob?: ArrayBuffer | Buffer | string | null;
    /**
     * Proxy client key type.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLKEYTYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLKEYTYPE.html)
     */
    PROXY_SSLKEYTYPE?: string | number | boolean | null;
    /**
     * Proxy client key type.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLKEYTYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLKEYTYPE.html)
     */
    proxySslKeyType?: string | number | boolean | null;
    /**
     * Proxy SSL version to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLVERSION.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLVERSION.html)
     */
    PROXY_SSLVERSION?: string | number | boolean | null;
    /**
     * Proxy SSL version to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLVERSION.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_SSLVERSION.html)
     */
    proxySslversion?: string | number | boolean | null;
    /**
     * Proxy TLS 1.3 cipher suites to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLS13_CIPHERS.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLS13_CIPHERS.html)
     */
    PROXY_TLS13_CIPHERS?: string | number | boolean | null;
    /**
     * Proxy TLS 1.3 cipher suites to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLS13_CIPHERS.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLS13_CIPHERS.html)
     */
    proxyTls13Ciphers?: string | number | boolean | null;
    /**
     * Proxy TLS authentication password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_PASSWORD.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_PASSWORD.html)
     */
    PROXY_TLSAUTH_PASSWORD?: string | number | boolean | null;
    /**
     * Proxy TLS authentication password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_PASSWORD.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_PASSWORD.html)
     */
    proxyTlsAuthPassword?: string | number | boolean | null;
    /**
     * Proxy TLS authentication methods.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_TYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_TYPE.html)
     */
    PROXY_TLSAUTH_TYPE?: string | number | boolean | null;
    /**
     * Proxy TLS authentication methods.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_TYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_TYPE.html)
     */
    proxyTlsAuthType?: string | number | boolean | null;
    /**
     * Proxy TLS authentication user name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_USERNAME.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_USERNAME.html)
     */
    PROXY_TLSAUTH_USERNAME?: string | number | boolean | null;
    /**
     * Proxy TLS authentication user name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_USERNAME.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_USERNAME.html)
     */
    proxyTlsAuthUsername?: string | number | boolean | null;
    /**
     * Add transfer mode to URL over proxy.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TRANSFER_MODE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TRANSFER_MODE.html)
     */
    PROXY_TRANSFER_MODE?: string | number | boolean | null;
    /**
     * Add transfer mode to URL over proxy.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TRANSFER_MODE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TRANSFER_MODE.html)
     */
    proxyTransferMode?: string | number | boolean | null;
    /**
     * HTTP proxy authentication methods.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYAUTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYAUTH.html)
     */
    PROXYAUTH?: string | number | boolean | null;
    /**
     * HTTP proxy authentication methods.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYAUTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYAUTH.html)
     */
    proxyAuth?: string | number | boolean | null;
    /**
     * Custom HTTP headers sent to proxy.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYHEADER.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYHEADER.html)
     */
    PROXYHEADER?: string[] | null;
    /**
     * Custom HTTP headers sent to proxy.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYHEADER.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYHEADER.html)
     */
    proxyHeader?: string[] | null;
    /**
     * Proxy password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYPASSWORD.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYPASSWORD.html)
     */
    PROXYPASSWORD?: string | number | boolean | null;
    /**
     * Proxy password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYPASSWORD.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYPASSWORD.html)
     */
    proxyPassword?: string | number | boolean | null;
    /**
     * Proxy port to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYPORT.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYPORT.html)
     */
    PROXYPORT?: string | number | boolean | null;
    /**
     * Proxy port to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYPORT.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYPORT.html)
     */
    proxyPort?: string | number | boolean | null;
    /**
     * Proxy type.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYTYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYTYPE.html)
     */
    PROXYTYPE?: CurlProxy | null;
    /**
     * Proxy type.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYTYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYTYPE.html)
     */
    proxyType?: CurlProxy | null;
    /**
     * Proxy user name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYUSERNAME.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYUSERNAME.html)
     */
    PROXYUSERNAME?: string | number | boolean | null;
    /**
     * Proxy user name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYUSERNAME.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYUSERNAME.html)
     */
    proxyUsername?: string | number | boolean | null;
    /**
     * Proxy user name and password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYUSERPWD.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYUSERPWD.html)
     */
    PROXYUSERPWD?: string | number | boolean | null;
    /**
     * Proxy user name and password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PROXYUSERPWD.html](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYUSERPWD.html)
     */
    proxyUserpwd?: string | number | boolean | null;
    /**
     * Issue an HTTP PUT request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PUT.html](https://curl.haxx.se/libcurl/c/CURLOPT_PUT.html)
     */
    PUT?: string | number | boolean | null;
    /**
     * Issue an HTTP PUT request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_PUT.html](https://curl.haxx.se/libcurl/c/CURLOPT_PUT.html)
     */
    put?: string | number | boolean | null;
    /**
     * Commands to run before transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_QUOTE.html](https://curl.haxx.se/libcurl/c/CURLOPT_QUOTE.html)
     */
    QUOTE?: string[] | null;
    /**
     * Commands to run before transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_QUOTE.html](https://curl.haxx.se/libcurl/c/CURLOPT_QUOTE.html)
     */
    quote?: string[] | null;
    /**
     * Provide source for entropy random data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RANDOM_FILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_RANDOM_FILE.html)
     */
    RANDOM_FILE?: string | number | boolean | null;
    /**
     * Provide source for entropy random data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RANDOM_FILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_RANDOM_FILE.html)
     */
    randomFile?: string | number | boolean | null;
    /**
     * Range requests.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RANGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_RANGE.html)
     */
    RANGE?: string | number | boolean | null;
    /**
     * Range requests.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RANGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_RANGE.html)
     */
    range?: string | number | boolean | null;
    /**
     * Data pointer to pass to the read callback.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_READDATA.html](https://curl.haxx.se/libcurl/c/CURLOPT_READDATA.html)
     */
    READDATA?: string | number | boolean | null;
    /**
     * Data pointer to pass to the read callback.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_READDATA.html](https://curl.haxx.se/libcurl/c/CURLOPT_READDATA.html)
     */
    readData?: string | number | boolean | null;
    /**
     * Callback for reading data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_READFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_READFUNCTION.html)
     */
    READFUNCTION?: ((this: EasyNativeBinding, data: Buffer, size: number, nmemb: number) => number) | null;
    /**
     * Callback for reading data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_READFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_READFUNCTION.html)
     */
    readFunction?: ((this: EasyNativeBinding, data: Buffer, size: number, nmemb: number) => number) | null;
    /**
     * Protocols to allow redirects to.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_REDIR_PROTOCOLS.html](https://curl.haxx.se/libcurl/c/CURLOPT_REDIR_PROTOCOLS.html)
     */
    REDIR_PROTOCOLS?: CurlProtocol | null;
    /**
     * Protocols to allow redirects to.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_REDIR_PROTOCOLS.html](https://curl.haxx.se/libcurl/c/CURLOPT_REDIR_PROTOCOLS.html)
     */
    redirProtocols?: CurlProtocol | null;
    /**
     * Referer: header.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_REFERER.html](https://curl.haxx.se/libcurl/c/CURLOPT_REFERER.html)
     */
    REFERER?: string | number | boolean | null;
    /**
     * Referer: header.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_REFERER.html](https://curl.haxx.se/libcurl/c/CURLOPT_REFERER.html)
     */
    referer?: string | number | boolean | null;
    /**
     * Set the request target.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_REQUEST_TARGET.html](https://curl.haxx.se/libcurl/c/CURLOPT_REQUEST_TARGET.html)
     */
    REQUEST_TARGET?: string | number | boolean | null;
    /**
     * Set the request target.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_REQUEST_TARGET.html](https://curl.haxx.se/libcurl/c/CURLOPT_REQUEST_TARGET.html)
     */
    requestTarget?: string | number | boolean | null;
    /**
     * Provide fixed/fake name resolves.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RESOLVE.html](https://curl.haxx.se/libcurl/c/CURLOPT_RESOLVE.html)
     */
    RESOLVE?: string[] | null;
    /**
     * Provide fixed/fake name resolves.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RESOLVE.html](https://curl.haxx.se/libcurl/c/CURLOPT_RESOLVE.html)
     */
    resolve?: string[] | null;
    /**
     * Resume a transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RESUME_FROM.html](https://curl.haxx.se/libcurl/c/CURLOPT_RESUME_FROM.html)
     */
    RESUME_FROM?: string | number | boolean | null;
    /**
     * Resume a transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RESUME_FROM.html](https://curl.haxx.se/libcurl/c/CURLOPT_RESUME_FROM.html)
     */
    resumeFrom?: string | number | boolean | null;
    /**
     * Resume a transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RESUME_FROM_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_RESUME_FROM_LARGE.html)
     */
    RESUME_FROM_LARGE?: string | number | boolean | null;
    /**
     * Resume a transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RESUME_FROM_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_RESUME_FROM_LARGE.html)
     */
    resumeFromLarge?: string | number | boolean | null;
    /**
     * Client CSEQ number.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_CLIENT_CSEQ.html](https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_CLIENT_CSEQ.html)
     */
    RTSP_CLIENT_CSEQ?: string | number | boolean | null;
    /**
     * Client CSEQ number.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_CLIENT_CSEQ.html](https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_CLIENT_CSEQ.html)
     */
    rtspClientCseq?: string | number | boolean | null;
    /**
     * RTSP request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_REQUEST.html](https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_REQUEST.html)
     */
    RTSP_REQUEST?: CurlRtspRequest | null;
    /**
     * RTSP request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_REQUEST.html](https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_REQUEST.html)
     */
    rtspRequest?: CurlRtspRequest | null;
    /**
     * CSEQ number for RTSP Server-\>Client request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_SERVER_CSEQ.html](https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_SERVER_CSEQ.html)
     */
    RTSP_SERVER_CSEQ?: string | number | boolean | null;
    /**
     * CSEQ number for RTSP Server-\>Client request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_SERVER_CSEQ.html](https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_SERVER_CSEQ.html)
     */
    rtspServerCseq?: string | number | boolean | null;
    /**
     * RTSP session-id.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_SESSION_ID.html](https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_SESSION_ID.html)
     */
    RTSP_SESSION_ID?: string | number | boolean | null;
    /**
     * RTSP session-id.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_SESSION_ID.html](https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_SESSION_ID.html)
     */
    rtspSessionId?: string | number | boolean | null;
    /**
     * RTSP stream URI.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_STREAM_URI.html](https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_STREAM_URI.html)
     */
    RTSP_STREAM_URI?: string | number | boolean | null;
    /**
     * RTSP stream URI.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_STREAM_URI.html](https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_STREAM_URI.html)
     */
    rtspStreamUri?: string | number | boolean | null;
    /**
     * RTSP Transport: header.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_TRANSPORT.html](https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_TRANSPORT.html)
     */
    RTSP_TRANSPORT?: string | number | boolean | null;
    /**
     * RTSP Transport: header.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_TRANSPORT.html](https://curl.haxx.se/libcurl/c/CURLOPT_RTSP_TRANSPORT.html)
     */
    rtspTransPort?: string | number | boolean | null;
    /**
     * SASL authorization identity (identity to act as).
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SASL_AUTHZID.html](https://curl.haxx.se/libcurl/c/CURLOPT_SASL_AUTHZID.html)
     */
    SASL_AUTHZID?: string | number | boolean | null;
    /**
     * SASL authorization identity (identity to act as).
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SASL_AUTHZID.html](https://curl.haxx.se/libcurl/c/CURLOPT_SASL_AUTHZID.html)
     */
    saslAuthzId?: string | number | boolean | null;
    /**
     * Enable SASL initial response.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SASL_IR.html](https://curl.haxx.se/libcurl/c/CURLOPT_SASL_IR.html)
     */
    SASL_IR?: string | number | boolean | null;
    /**
     * Enable SASL initial response.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SASL_IR.html](https://curl.haxx.se/libcurl/c/CURLOPT_SASL_IR.html)
     */
    saslIr?: string | number | boolean | null;
    /**
     * Callback for seek operations.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SEEKFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_SEEKFUNCTION.html)
     */
    SEEKFUNCTION?: ((this: EasyNativeBinding, offset: number, origin: number) => number) | null;
    /**
     * Callback for seek operations.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SEEKFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_SEEKFUNCTION.html)
     */
    seekFunction?: ((this: EasyNativeBinding, offset: number, origin: number) => number) | null;
    /**
     * Authentication service name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SERVICE_NAME.html](https://curl.haxx.se/libcurl/c/CURLOPT_SERVICE_NAME.html)
     */
    SERVICE_NAME?: string | number | boolean | null;
    /**
     * Authentication service name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SERVICE_NAME.html](https://curl.haxx.se/libcurl/c/CURLOPT_SERVICE_NAME.html)
     */
    serviceName?: string | number | boolean | null;
    /**
     * Share object to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SHARE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SHARE.html)
     */
    SHARE?: Share | null;
    /**
     * Share object to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SHARE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SHARE.html)
     */
    share?: Share | null;
    /**
     * Socks5 authentication methods.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SOCKS5_AUTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_SOCKS5_AUTH.html)
     */
    SOCKS5_AUTH?: string | number | boolean | null;
    /**
     * Socks5 authentication methods.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SOCKS5_AUTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_SOCKS5_AUTH.html)
     */
    socks5Auth?: string | number | boolean | null;
    /**
     * Socks5 GSSAPI NEC mode.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SOCKS5_GSSAPI_NEC.html](https://curl.haxx.se/libcurl/c/CURLOPT_SOCKS5_GSSAPI_NEC.html)
     */
    SOCKS5_GSSAPI_NEC?: string | number | boolean | null;
    /**
     * Socks5 GSSAPI NEC mode.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SOCKS5_GSSAPI_NEC.html](https://curl.haxx.se/libcurl/c/CURLOPT_SOCKS5_GSSAPI_NEC.html)
     */
    socks5GssapiNec?: string | number | boolean | null;
    /**
     * Socks5 GSSAPI service name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SOCKS5_GSSAPI_SERVICE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SOCKS5_GSSAPI_SERVICE.html)
     */
    SOCKS5_GSSAPI_SERVICE?: string | number | boolean | null;
    /**
     * Socks5 GSSAPI service name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SOCKS5_GSSAPI_SERVICE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SOCKS5_GSSAPI_SERVICE.html)
     */
    socks5GssapiService?: string | number | boolean | null;
    /**
     * SSH authentication types.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_AUTH_TYPES.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_AUTH_TYPES.html)
     */
    SSH_AUTH_TYPES?: CurlSshAuth | null;
    /**
     * SSH authentication types.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_AUTH_TYPES.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_AUTH_TYPES.html)
     */
    sshAuthTypes?: CurlSshAuth | null;
    /**
     * Enable SSH compression.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_COMPRESSION.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_COMPRESSION.html)
     */
    SSH_COMPRESSION?: string | number | boolean | null;
    /**
     * Enable SSH compression.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_COMPRESSION.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_COMPRESSION.html)
     */
    sshCompression?: string | number | boolean | null;
    /**
     * MD5 of host's public key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_HOST_PUBLIC_KEY_MD5.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_HOST_PUBLIC_KEY_MD5.html)
     */
    SSH_HOST_PUBLIC_KEY_MD5?: string | number | boolean | null;
    /**
     * MD5 of host's public key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_HOST_PUBLIC_KEY_MD5.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_HOST_PUBLIC_KEY_MD5.html)
     */
    sshHostPublicKeyMd5?: string | number | boolean | null;
    /**
     * SHA256 of host's public key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_HOST_PUBLIC_KEY_SHA256.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_HOST_PUBLIC_KEY_SHA256.html)
     */
    SSH_HOST_PUBLIC_KEY_SHA256?: string | number | boolean | null;
    /**
     * SHA256 of host's public key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_HOST_PUBLIC_KEY_SHA256.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_HOST_PUBLIC_KEY_SHA256.html)
     */
    sshHostPublicKeySha256?: string | number | boolean | null;
    /**
     * File name with known hosts.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_KNOWNHOSTS.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_KNOWNHOSTS.html)
     */
    SSH_KNOWNHOSTS?: string | number | boolean | null;
    /**
     * File name with known hosts.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_KNOWNHOSTS.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_KNOWNHOSTS.html)
     */
    sshKnownHosts?: string | number | boolean | null;
    /**
     * File name of private key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_PRIVATE_KEYFILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_PRIVATE_KEYFILE.html)
     */
    SSH_PRIVATE_KEYFILE?: string | number | boolean | null;
    /**
     * File name of private key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_PRIVATE_KEYFILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_PRIVATE_KEYFILE.html)
     */
    sshPrivateKeyFile?: string | number | boolean | null;
    /**
     * File name of public key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_PUBLIC_KEYFILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_PUBLIC_KEYFILE.html)
     */
    SSH_PUBLIC_KEYFILE?: string | number | boolean | null;
    /**
     * File name of public key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSH_PUBLIC_KEYFILE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSH_PUBLIC_KEYFILE.html)
     */
    sshPublicKeyFile?: string | number | boolean | null;
    /**
     * Ciphers to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_CIPHER_LIST.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_CIPHER_LIST.html)
     */
    SSL_CIPHER_LIST?: string | number | boolean | null;
    /**
     * Ciphers to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_CIPHER_LIST.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_CIPHER_LIST.html)
     */
    sslCipherList?: string | number | boolean | null;
    /**
     * Set key exchange curves.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_EC_CURVES.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_EC_CURVES.html)
     */
    SSL_EC_CURVES?: string | number | boolean | null;
    /**
     * Set key exchange curves.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_EC_CURVES.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_EC_CURVES.html)
     */
    sslEcCurves?: string | number | boolean | null;
    /**
     * Enable use of ALPN.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_ENABLE_ALPN.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_ENABLE_ALPN.html)
     */
    SSL_ENABLE_ALPN?: string | number | boolean | null;
    /**
     * Enable use of ALPN.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_ENABLE_ALPN.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_ENABLE_ALPN.html)
     */
    sslEnableAlpn?: string | number | boolean | null;
    /**
     * Enable use of NPN.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_ENABLE_NPN.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_ENABLE_NPN.html)
     */
    SSL_ENABLE_NPN?: string | number | boolean | null;
    /**
     * Enable use of NPN.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_ENABLE_NPN.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_ENABLE_NPN.html)
     */
    sslEnableNpn?: string | number | boolean | null;
    /**
     * Enable TLS False Start.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_FALSESTART.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_FALSESTART.html)
     */
    SSL_FALSESTART?: string | number | boolean | null;
    /**
     * Enable TLS False Start.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_FALSESTART.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_FALSESTART.html)
     */
    sslFalsestart?: string | number | boolean | null;
    /**
     * Control SSL behavior.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_OPTIONS.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_OPTIONS.html)
     */
    SSL_OPTIONS?: CurlSslOpt | null;
    /**
     * Control SSL behavior.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_OPTIONS.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_OPTIONS.html)
     */
    sslOptions?: CurlSslOpt | null;
    /**
     * Disable SSL session-id cache.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_SESSIONID_CACHE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_SESSIONID_CACHE.html)
     */
    SSL_SESSIONID_CACHE?: string | number | boolean | null;
    /**
     * Disable SSL session-id cache.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_SESSIONID_CACHE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_SESSIONID_CACHE.html)
     */
    sslSessionIdCache?: string | number | boolean | null;
    /**
     * Verify the host name in the SSL certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYHOST.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYHOST.html)
     */
    SSL_VERIFYHOST?: string | number | boolean | null;
    /**
     * Verify the host name in the SSL certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYHOST.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYHOST.html)
     */
    sslVerifyHost?: string | number | boolean | null;
    /**
     * Verify the SSL certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYPEER.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYPEER.html)
     */
    SSL_VERIFYPEER?: string | number | boolean | null;
    /**
     * Verify the SSL certificate.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYPEER.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYPEER.html)
     */
    sslVerifyPeer?: string | number | boolean | null;
    /**
     * Verify the SSL certificate's status.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYSTATUS.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYSTATUS.html)
     */
    SSL_VERIFYSTATUS?: string | number | boolean | null;
    /**
     * Verify the SSL certificate's status.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYSTATUS.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYSTATUS.html)
     */
    sslVerifyStatus?: string | number | boolean | null;
    /**
     * Client cert.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERT.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERT.html)
     */
    SSLCERT?: string | number | boolean | null;
    /**
     * Client cert.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERT.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERT.html)
     */
    sslCert?: string | number | boolean | null;
    /**
     * Client cert memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERT_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERT_BLOB.html)
     */
    SSLCERT_BLOB?: ArrayBuffer | Buffer | string | null;
    /**
     * Client cert memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERT_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERT_BLOB.html)
     */
    sslCertBlob?: ArrayBuffer | Buffer | string | null;
    /**
     * Client cert type.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERTTYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERTTYPE.html)
     */
    SSLCERTTYPE?: string | number | boolean | null;
    /**
     * Client cert type.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERTTYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERTTYPE.html)
     */
    sslCertType?: string | number | boolean | null;
    /**
     * Use identifier with SSL engine.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLENGINE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLENGINE.html)
     */
    SSLENGINE?: string | number | boolean | null;
    /**
     * Use identifier with SSL engine.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLENGINE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLENGINE.html)
     */
    sslEngine?: string | number | boolean | null;
    /**
     * Default SSL engine.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLENGINE_DEFAULT.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLENGINE_DEFAULT.html)
     */
    SSLENGINE_DEFAULT?: string | number | boolean | null;
    /**
     * Default SSL engine.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLENGINE_DEFAULT.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLENGINE_DEFAULT.html)
     */
    sslEngineDefault?: string | number | boolean | null;
    /**
     * Client key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLKEY.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLKEY.html)
     */
    SSLKEY?: string | number | boolean | null;
    /**
     * Client key.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLKEY.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLKEY.html)
     */
    sslKey?: string | number | boolean | null;
    /**
     * Client key memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLKEY_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLKEY_BLOB.html)
     */
    SSLKEY_BLOB?: ArrayBuffer | Buffer | string | null;
    /**
     * Client key memory buffer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLKEY_BLOB.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLKEY_BLOB.html)
     */
    sslKeyBlob?: ArrayBuffer | Buffer | string | null;
    /**
     * Client key type.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLKEYTYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLKEYTYPE.html)
     */
    SSLKEYTYPE?: string | number | boolean | null;
    /**
     * Client key type.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLKEYTYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLKEYTYPE.html)
     */
    sslKeyType?: string | number | boolean | null;
    /**
     * SSL version to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLVERSION.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLVERSION.html)
     */
    SSLVERSION?: CurlSslVersion | null;
    /**
     * SSL version to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SSLVERSION.html](https://curl.haxx.se/libcurl/c/CURLOPT_SSLVERSION.html)
     */
    sslversion?: CurlSslVersion | null;
    /**
     * Suppress proxy CONNECT response headers from user callbacks.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SUPPRESS_CONNECT_HEADERS.html](https://curl.haxx.se/libcurl/c/CURLOPT_SUPPRESS_CONNECT_HEADERS.html)
     */
    SUPPRESS_CONNECT_HEADERS?: string | number | boolean | null;
    /**
     * Suppress proxy CONNECT response headers from user callbacks.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_SUPPRESS_CONNECT_HEADERS.html](https://curl.haxx.se/libcurl/c/CURLOPT_SUPPRESS_CONNECT_HEADERS.html)
     */
    suppressConnectHeaders?: string | number | boolean | null;
    /**
     * Enable TFO, TCP Fast Open.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TCP_FASTOPEN.html](https://curl.haxx.se/libcurl/c/CURLOPT_TCP_FASTOPEN.html)
     */
    TCP_FASTOPEN?: string | number | boolean | null;
    /**
     * Enable TFO, TCP Fast Open.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TCP_FASTOPEN.html](https://curl.haxx.se/libcurl/c/CURLOPT_TCP_FASTOPEN.html)
     */
    tcpFastOpen?: string | number | boolean | null;
    /**
     * Enable TCP keep-alive.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPALIVE.html](https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPALIVE.html)
     */
    TCP_KEEPALIVE?: string | number | boolean | null;
    /**
     * Enable TCP keep-alive.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPALIVE.html](https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPALIVE.html)
     */
    tcpKeepAlive?: string | number | boolean | null;
    /**
     * Idle time before sending keep-alive.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPIDLE.html](https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPIDLE.html)
     */
    TCP_KEEPIDLE?: string | number | boolean | null;
    /**
     * Idle time before sending keep-alive.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPIDLE.html](https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPIDLE.html)
     */
    tcpKeepIdle?: string | number | boolean | null;
    /**
     * Interval between keep-alive probes.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPINTVL.html](https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPINTVL.html)
     */
    TCP_KEEPINTVL?: string | number | boolean | null;
    /**
     * Interval between keep-alive probes.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPINTVL.html](https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPINTVL.html)
     */
    tcpKeepIntvl?: string | number | boolean | null;
    /**
     * Disable the Nagle algorithm.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TCP_NODELAY.html](https://curl.haxx.se/libcurl/c/CURLOPT_TCP_NODELAY.html)
     */
    TCP_NODELAY?: string | number | boolean | null;
    /**
     * Disable the Nagle algorithm.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TCP_NODELAY.html](https://curl.haxx.se/libcurl/c/CURLOPT_TCP_NODELAY.html)
     */
    tcpNoDelay?: string | number | boolean | null;
    /**
     * TELNET options.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TELNETOPTIONS.html](https://curl.haxx.se/libcurl/c/CURLOPT_TELNETOPTIONS.html)
     */
    TELNETOPTIONS?: string[] | null;
    /**
     * TELNET options.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TELNETOPTIONS.html](https://curl.haxx.se/libcurl/c/CURLOPT_TELNETOPTIONS.html)
     */
    telnetOptions?: string[] | null;
    /**
     * TFTP block size.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TFTP_BLKSIZE.html](https://curl.haxx.se/libcurl/c/CURLOPT_TFTP_BLKSIZE.html)
     */
    TFTP_BLKSIZE?: string | number | boolean | null;
    /**
     * TFTP block size.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TFTP_BLKSIZE.html](https://curl.haxx.se/libcurl/c/CURLOPT_TFTP_BLKSIZE.html)
     */
    tftpBlkSize?: string | number | boolean | null;
    /**
     * Do not send TFTP options requests.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TFTP_NO_OPTIONS.html](https://curl.haxx.se/libcurl/c/CURLOPT_TFTP_NO_OPTIONS.html)
     */
    TFTP_NO_OPTIONS?: string | number | boolean | null;
    /**
     * Do not send TFTP options requests.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TFTP_NO_OPTIONS.html](https://curl.haxx.se/libcurl/c/CURLOPT_TFTP_NO_OPTIONS.html)
     */
    tftpNoOptions?: string | number | boolean | null;
    /**
     * Make a time conditional request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TIMECONDITION.html](https://curl.haxx.se/libcurl/c/CURLOPT_TIMECONDITION.html)
     */
    TIMECONDITION?: CurlTimeCond | null;
    /**
     * Make a time conditional request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TIMECONDITION.html](https://curl.haxx.se/libcurl/c/CURLOPT_TIMECONDITION.html)
     */
    timeCondition?: CurlTimeCond | null;
    /**
     * Timeout for the entire request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TIMEOUT.html](https://curl.haxx.se/libcurl/c/CURLOPT_TIMEOUT.html)
     */
    TIMEOUT?: string | number | boolean | null;
    /**
     * Timeout for the entire request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TIMEOUT.html](https://curl.haxx.se/libcurl/c/CURLOPT_TIMEOUT.html)
     */
    timeout?: string | number | boolean | null;
    /**
     * Millisecond timeout for the entire request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TIMEOUT_MS.html](https://curl.haxx.se/libcurl/c/CURLOPT_TIMEOUT_MS.html)
     */
    TIMEOUT_MS?: string | number | boolean | null;
    /**
     * Millisecond timeout for the entire request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TIMEOUT_MS.html](https://curl.haxx.se/libcurl/c/CURLOPT_TIMEOUT_MS.html)
     */
    timeoutMs?: string | number | boolean | null;
    /**
     * Time value for the time conditional request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TIMEVALUE.html](https://curl.haxx.se/libcurl/c/CURLOPT_TIMEVALUE.html)
     */
    TIMEVALUE?: string | number | boolean | null;
    /**
     * Time value for the time conditional request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TIMEVALUE.html](https://curl.haxx.se/libcurl/c/CURLOPT_TIMEVALUE.html)
     */
    timeValue?: string | number | boolean | null;
    /**
     * Time value for the time conditional request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TIMEVALUE_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_TIMEVALUE_LARGE.html)
     */
    TIMEVALUE_LARGE?: string | number | boolean | null;
    /**
     * Time value for the time conditional request.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TIMEVALUE_LARGE.html](https://curl.haxx.se/libcurl/c/CURLOPT_TIMEVALUE_LARGE.html)
     */
    timeValueLarge?: string | number | boolean | null;
    /**
     * TLS 1.3 cipher suites to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TLS13_CIPHERS.html](https://curl.haxx.se/libcurl/c/CURLOPT_TLS13_CIPHERS.html)
     */
    TLS13_CIPHERS?: string | number | boolean | null;
    /**
     * TLS 1.3 cipher suites to use.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TLS13_CIPHERS.html](https://curl.haxx.se/libcurl/c/CURLOPT_TLS13_CIPHERS.html)
     */
    tls13Ciphers?: string | number | boolean | null;
    /**
     * TLS authentication password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_PASSWORD.html](https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_PASSWORD.html)
     */
    TLSAUTH_PASSWORD?: string | number | boolean | null;
    /**
     * TLS authentication password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_PASSWORD.html](https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_PASSWORD.html)
     */
    tlsAuthPassword?: string | number | boolean | null;
    /**
     * TLS authentication methods.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_TYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_TYPE.html)
     */
    TLSAUTH_TYPE?: string | number | boolean | null;
    /**
     * TLS authentication methods.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_TYPE.html](https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_TYPE.html)
     */
    tlsAuthType?: string | number | boolean | null;
    /**
     * TLS authentication user name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_USERNAME.html](https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_USERNAME.html)
     */
    TLSAUTH_USERNAME?: string | number | boolean | null;
    /**
     * TLS authentication user name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_USERNAME.html](https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_USERNAME.html)
     */
    tlsAuthUsername?: string | number | boolean | null;
    /**
     * Set callback for sending trailing headers.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TRAILERFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_TRAILERFUNCTION.html)
     */
    TRAILERFUNCTION?: ((this: EasyNativeBinding) => string[] | false) | null;
    /**
     * Set callback for sending trailing headers.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TRAILERFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_TRAILERFUNCTION.html)
     */
    trailerFunction?: ((this: EasyNativeBinding) => string[] | false) | null;
    /**
     * Request Transfer-Encoding.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TRANSFER_ENCODING.html](https://curl.haxx.se/libcurl/c/CURLOPT_TRANSFER_ENCODING.html)
     */
    TRANSFER_ENCODING?: string | number | boolean | null;
    /**
     * Request Transfer-Encoding.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TRANSFER_ENCODING.html](https://curl.haxx.se/libcurl/c/CURLOPT_TRANSFER_ENCODING.html)
     */
    transferEncoding?: string | number | boolean | null;
    /**
     * Use text transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TRANSFERTEXT.html](https://curl.haxx.se/libcurl/c/CURLOPT_TRANSFERTEXT.html)
     */
    TRANSFERTEXT?: string | number | boolean | null;
    /**
     * Use text transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_TRANSFERTEXT.html](https://curl.haxx.se/libcurl/c/CURLOPT_TRANSFERTEXT.html)
     */
    transferText?: string | number | boolean | null;
    /**
     * Path to a Unix domain socket.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_UNIX_SOCKET_PATH.html](https://curl.haxx.se/libcurl/c/CURLOPT_UNIX_SOCKET_PATH.html)
     */
    UNIX_SOCKET_PATH?: string | number | boolean | null;
    /**
     * Path to a Unix domain socket.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_UNIX_SOCKET_PATH.html](https://curl.haxx.se/libcurl/c/CURLOPT_UNIX_SOCKET_PATH.html)
     */
    unixSocketPath?: string | number | boolean | null;
    /**
     * Do not restrict authentication to original host.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_UNRESTRICTED_AUTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_UNRESTRICTED_AUTH.html)
     */
    UNRESTRICTED_AUTH?: string | number | boolean | null;
    /**
     * Do not restrict authentication to original host.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_UNRESTRICTED_AUTH.html](https://curl.haxx.se/libcurl/c/CURLOPT_UNRESTRICTED_AUTH.html)
     */
    unrestrictedAuth?: string | number | boolean | null;
    /**
     * Sets the interval at which connection upkeep are performed.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_UPKEEP_INTERVAL_MS.html](https://curl.haxx.se/libcurl/c/CURLOPT_UPKEEP_INTERVAL_MS.html)
     */
    UPKEEP_INTERVAL_MS?: string | number | boolean | null;
    /**
     * Sets the interval at which connection upkeep are performed.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_UPKEEP_INTERVAL_MS.html](https://curl.haxx.se/libcurl/c/CURLOPT_UPKEEP_INTERVAL_MS.html)
     */
    upkeepIntervalMs?: string | number | boolean | null;
    /**
     * Upload data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_UPLOAD.html](https://curl.haxx.se/libcurl/c/CURLOPT_UPLOAD.html)
     */
    UPLOAD?: string | number | boolean | null;
    /**
     * Upload data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_UPLOAD.html](https://curl.haxx.se/libcurl/c/CURLOPT_UPLOAD.html)
     */
    upload?: string | number | boolean | null;
    /**
     * Set upload buffer size.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_UPLOAD_BUFFERSIZE.html](https://curl.haxx.se/libcurl/c/CURLOPT_UPLOAD_BUFFERSIZE.html)
     */
    UPLOAD_BUFFERSIZE?: string | number | boolean | null;
    /**
     * Set upload buffer size.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_UPLOAD_BUFFERSIZE.html](https://curl.haxx.se/libcurl/c/CURLOPT_UPLOAD_BUFFERSIZE.html)
     */
    uploadBufferSize?: string | number | boolean | null;
    /**
     * URL to work on.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_URL.html](https://curl.haxx.se/libcurl/c/CURLOPT_URL.html)
     */
    URL?: string | number | boolean | null;
    /**
     * URL to work on.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_URL.html](https://curl.haxx.se/libcurl/c/CURLOPT_URL.html)
     */
    url?: string | number | boolean | null;
    /**
     * Use TLS/SSL.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_USE_SSL.html](https://curl.haxx.se/libcurl/c/CURLOPT_USE_SSL.html)
     */
    USE_SSL?: CurlUseSsl | null;
    /**
     * Use TLS/SSL.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_USE_SSL.html](https://curl.haxx.se/libcurl/c/CURLOPT_USE_SSL.html)
     */
    useSsl?: CurlUseSsl | null;
    /**
     * User-Agent: header.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_USERAGENT.html](https://curl.haxx.se/libcurl/c/CURLOPT_USERAGENT.html)
     */
    USERAGENT?: string | number | boolean | null;
    /**
     * User-Agent: header.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_USERAGENT.html](https://curl.haxx.se/libcurl/c/CURLOPT_USERAGENT.html)
     */
    userAgent?: string | number | boolean | null;
    /**
     * User name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_USERNAME.html](https://curl.haxx.se/libcurl/c/CURLOPT_USERNAME.html)
     */
    USERNAME?: string | number | boolean | null;
    /**
     * User name.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_USERNAME.html](https://curl.haxx.se/libcurl/c/CURLOPT_USERNAME.html)
     */
    username?: string | number | boolean | null;
    /**
     * User name and password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_USERPWD.html](https://curl.haxx.se/libcurl/c/CURLOPT_USERPWD.html)
     */
    USERPWD?: string | number | boolean | null;
    /**
     * User name and password.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_USERPWD.html](https://curl.haxx.se/libcurl/c/CURLOPT_USERPWD.html)
     */
    userpwd?: string | number | boolean | null;
    /**
     * Display verbose information.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_VERBOSE.html](https://curl.haxx.se/libcurl/c/CURLOPT_VERBOSE.html)
     */
    VERBOSE?: string | number | boolean | null;
    /**
     * Display verbose information.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_VERBOSE.html](https://curl.haxx.se/libcurl/c/CURLOPT_VERBOSE.html)
     */
    verbose?: string | number | boolean | null;
    /**
     * Transfer multiple files according to a file name pattern.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_WILDCARDMATCH.html](https://curl.haxx.se/libcurl/c/CURLOPT_WILDCARDMATCH.html)
     */
    WILDCARDMATCH?: string | number | boolean | null;
    /**
     * Transfer multiple files according to a file name pattern.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_WILDCARDMATCH.html](https://curl.haxx.se/libcurl/c/CURLOPT_WILDCARDMATCH.html)
     */
    wildcardMatch?: string | number | boolean | null;
    /**
     * Callback for writing data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_WRITEFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_WRITEFUNCTION.html)
     */
    WRITEFUNCTION?: ((this: EasyNativeBinding, data: Buffer, size: number, nmemb: number) => number) | null;
    /**
     * Callback for writing data.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_WRITEFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_WRITEFUNCTION.html)
     */
    writeFunction?: ((this: EasyNativeBinding, data: Buffer, size: number, nmemb: number) => number) | null;
    /**
     * Callback for progress meter.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_XFERINFOFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_XFERINFOFUNCTION.html)
     */
    XFERINFOFUNCTION?: ((this: EasyNativeBinding, dltotal: number, dlnow: number, ultotal: number, ulnow: number) => number | CurlProgressFunc) | null;
    /**
     * Callback for progress meter.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_XFERINFOFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLOPT_XFERINFOFUNCTION.html)
     */
    xferInfoFunction?: ((this: EasyNativeBinding, dltotal: number, dlnow: number, ultotal: number, ulnow: number) => number | CurlProgressFunc) | null;
    /**
     * OAuth2 bearer token.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_XOAUTH2_BEARER.html](https://curl.haxx.se/libcurl/c/CURLOPT_XOAUTH2_BEARER.html)
     */
    XOAUTH2_BEARER?: string | number | boolean | null;
    /**
     * OAuth2 bearer token.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLOPT_XOAUTH2_BEARER.html](https://curl.haxx.se/libcurl/c/CURLOPT_XOAUTH2_BEARER.html)
     */
    xoauth2Bearer?: string | number | boolean | null;
    /**
     * (curl-impersonate) SSL Compression type. Eg. brotli
     *
     * Official libcurl documentation: : [https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L125](https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L125)
     */
    SSL_COMPRESSION?: string | number | boolean | null;
    /**
     * (curl-impersonate) SSL Compression type. Eg. brotli
     *
     * Official libcurl documentation: : [https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L125](https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L125)
     */
    sslCompression?: string | number | boolean | null;
    /**
     * (curl-impersonate) TLS Client hello match Extension
     *
     * Official libcurl documentation: : [https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L119](https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L119)
     */
    SSL_ENABLE_ALPS?: string | number | boolean | null;
    /**
     * (curl-impersonate) TLS Client hello match Extension
     *
     * Official libcurl documentation: : [https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L119](https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L119)
     */
    sslEnableAlps?: string | number | boolean | null;
};
//# sourceMappingURL=CurlOption.d.ts.map