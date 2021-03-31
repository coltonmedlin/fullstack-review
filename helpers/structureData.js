module.exports.structureData = (data) => {
  let structuredData = [];
  data.forEach((item) => {
    let result = {
      id: item.id,
      name: item.name,
      description: item.description,
      owner: {
        id: item.owner.id,
        name: item.owner.login,
        avatarUrl: item.owner.avatar_url
      },
      stargazersCount: item.stargazers_count
    };
    structuredData.push(result);
  });
  return structuredData;
};