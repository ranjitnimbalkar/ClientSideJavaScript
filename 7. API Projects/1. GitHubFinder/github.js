class GitHub {
    constructor() {
        this.client_id = 'fbc95c6c02e354790f64';
        this.client_secret = '9d1cef66f0d75dcf6af3736603e26c0f094c8a28';
    }

    async getUser(user) {
        const profileUrl = `https://api.github.com/users/${user}
        ?client_id=${this.client_id}&client_secret=${this.client_secret}`;
        const reposUrl = `https://api.github.com/users/${user}/repos?
        client_id=${this.client_id}&client_secret=${this.client_secret}`;
        
        //Get profile response
        const profileResponse = await fetch(profileUrl);
        const profile = await profileResponse.json();

        //Get repos response
        const reposResponse = await fetch(reposUrl);
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}