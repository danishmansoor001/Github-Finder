const fetchGithubUser = async () => {
    const username = document.getElementById("searchInput").value;

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();

        if (response.ok) {
            document.getElementById("userDetails").innerHTML = `
            <div class="profile">
                <div class="profile-image">
                    <img class="profile-image-icon" src="${data.avatar_url}" alt="${data.name || 'User Avatar'}" />
                </div>
                <div class="profile-details">
                    <h2 class="name">${data.name || 'No Name'}</h2>
                    <p class="username">@${data.login}</p>
                    <p class="bio">${data.bio || 'This account doesn\'t have a bio'}</p>
                    <div class="stats">
                        <div>Public Repos: ${data.public_repos}</div>
                        <div>Followers: ${data.followers}</div>
                        <div>Following: ${data.following}</div>
                    </div>
                    <div class="media">
                        <p>Location: ${data.location || 'Not Available'}</p>
                        <p>Blog: ${data.blog || 'Not Available'}</p>
                        <p>Twitter: ${data.twitter_username || 'Not Available'}</p>
                        <p>Company: ${data.company || 'Not Available'}</p>
                    </div>
                </div>
            </div>
            `;
        } else {
            alert(data.message);
        }
    } catch (error) {
        alert('Error fetching data. Please try again later.');
    }
};
