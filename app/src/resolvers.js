// app/src/resolvers.js
const channels = [{
  id: 1,
  name: 'soccer',
  info: "sport number one"
}, {
  id: 2,
  name: 'basketball',
  info: "best sport"
}, {
  id: 3,
  name: 'hapkido',
  info: "martial sport"
}];

let nextId = 4;

export const resolvers = {
  Query: {
    channels: () => {
      return channels;
    },
    channel: (root, { id }) => {
      return channels.find(channel => channel.id === id);
    },
},
Mutation: {
  addChannel: (root, args) => {
    const newChannel = { id: nextId++, name: args.name };
    channels.push(newChannel);
    return newChannel;
  },
},
};