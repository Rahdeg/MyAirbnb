export const getGoogleCredentials=()=>{
    const clientId = process.env.GOOGLE_CLIENT_ID
    const clientSecret= process.env.GOOGLE_CLIENT_SECRET

    if (!clientId || clientId.length=== 0) {
        throw new Error("Missing GOOGLE_CLIENT_ID ")
    }

    if (!clientSecret || clientSecret.length=== 0) {
        throw new Error("Missing GOOGLE_CLIENT_SECRET ")
    }
    return {clientId,clientSecret}
}

export const getGithubCredentials=()=>{
    const clientId = process.env.GITHUB_ID
    const clientSecret= process.env.GITHUB_SECRET

    if (!clientId || clientId.length=== 0) {
        throw new Error("Missing GITHUB_ID ")
    }

    if (!clientSecret || clientSecret.length=== 0) {
        throw new Error("Missing GITHUB_SECRET ")
    }
    return {clientId,clientSecret}
}