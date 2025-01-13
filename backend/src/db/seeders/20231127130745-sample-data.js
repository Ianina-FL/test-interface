const db = require('../models');
const Users = db.users;

const Activities = db.activities;

const Branches = db.branches;

const Contacts = db.contacts;

const Leads = db.leads;

const Metrics = db.metrics;

const Notes = db.notes;

const Branch = db.branch;

const ActivitiesData = [
  {
    description: 'William Bayliss',

    start_time: new Date(),

    end_time: new Date(),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'Ernst Haeckel',

    start_time: new Date(),

    end_time: new Date(),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'Archimedes',

    start_time: new Date(),

    end_time: new Date(),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'Heike Kamerlingh Onnes',

    start_time: new Date(),

    end_time: new Date(),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const BranchesData = [
  {
    name: 'Justus Liebig',

    address: 'Charles Sherrington',

    phone_number: 'Jonas Salk',

    // type code here for "relation_one" field
  },

  {
    name: 'Joseph J. Thomson',

    address: 'Edwin Hubble',

    phone_number: 'Richard Feynman',

    // type code here for "relation_one" field
  },

  {
    name: 'Pierre Simon de Laplace',

    address: 'Michael Faraday',

    phone_number: 'Willard Libby',

    // type code here for "relation_one" field
  },

  {
    name: 'Emil Fischer',

    address: 'Nicolaus Copernicus',

    phone_number: 'Euclid',

    // type code here for "relation_one" field
  },
];

const ContactsData = [
  {
    first_name: 'John Dalton',

    last_name: 'Edward Teller',

    email: 'Stephen Hawking',

    phone_number: 'Marcello Malpighi',

    // type code here for "relation_one" field
  },

  {
    first_name: 'Thomas Hunt Morgan',

    last_name: 'Richard Feynman',

    email: 'Euclid',

    phone_number: 'Galileo Galilei',

    // type code here for "relation_one" field
  },

  {
    first_name: 'Alfred Binet',

    last_name: 'Frederick Sanger',

    email: 'Paul Ehrlich',

    phone_number: 'James Clerk Maxwell',

    // type code here for "relation_one" field
  },

  {
    first_name: 'Marcello Malpighi',

    last_name: 'Hans Selye',

    email: 'Max von Laue',

    phone_number: 'Robert Koch',

    // type code here for "relation_one" field
  },
];

const LeadsData = [
  {
    name: 'Theodosius Dobzhansky',

    status: 'lost',

    category: 'government',

    // type code here for "relation_one" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    name: 'Marie Curie',

    status: 'won',

    category: 'corporate',

    // type code here for "relation_one" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    name: 'Gustav Kirchhoff',

    status: 'qualified',

    category: 'individual',

    // type code here for "relation_one" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    name: 'Lynn Margulis',

    status: 'lost',

    category: 'individual',

    // type code here for "relation_one" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },
];

const MetricsData = [
  {
    name: 'Alfred Binet',

    value: 46.05,

    // type code here for "relation_one" field
  },

  {
    name: 'Emil Kraepelin',

    value: 17.92,

    // type code here for "relation_one" field
  },

  {
    name: 'B. F. Skinner',

    value: 44.64,

    // type code here for "relation_one" field
  },

  {
    name: 'Nicolaus Copernicus',

    value: 22.47,

    // type code here for "relation_one" field
  },
];

const NotesData = [
  {
    content: 'Emil Kraepelin',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'George Gaylord Simpson',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Albert Einstein',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Willard Libby',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const BranchData = [
  {
    name: 'Thomas Hunt Morgan',
  },

  {
    name: 'Claude Levi-Strauss',
  },

  {
    name: 'Ludwig Boltzmann',
  },

  {
    name: 'Carl Gauss (Karl Friedrich Gauss)',
  },
];

// Similar logic for "relation_many"

async function associateUserWithBranch() {
  const relatedBranch0 = await Branch.findOne({
    offset: Math.floor(Math.random() * (await Branch.count())),
  });
  const User0 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (User0?.setBranch) {
    await User0.setBranch(relatedBranch0);
  }

  const relatedBranch1 = await Branch.findOne({
    offset: Math.floor(Math.random() * (await Branch.count())),
  });
  const User1 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (User1?.setBranch) {
    await User1.setBranch(relatedBranch1);
  }

  const relatedBranch2 = await Branch.findOne({
    offset: Math.floor(Math.random() * (await Branch.count())),
  });
  const User2 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (User2?.setBranch) {
    await User2.setBranch(relatedBranch2);
  }

  const relatedBranch3 = await Branch.findOne({
    offset: Math.floor(Math.random() * (await Branch.count())),
  });
  const User3 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (User3?.setBranch) {
    await User3.setBranch(relatedBranch3);
  }
}

async function associateActivityWithLead() {
  const relatedLead0 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity0 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Activity0?.setLead) {
    await Activity0.setLead(relatedLead0);
  }

  const relatedLead1 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity1 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Activity1?.setLead) {
    await Activity1.setLead(relatedLead1);
  }

  const relatedLead2 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity2 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Activity2?.setLead) {
    await Activity2.setLead(relatedLead2);
  }

  const relatedLead3 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity3 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Activity3?.setLead) {
    await Activity3.setLead(relatedLead3);
  }
}

async function associateActivityWithBranch() {
  const relatedBranch0 = await Branch.findOne({
    offset: Math.floor(Math.random() * (await Branch.count())),
  });
  const Activity0 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Activity0?.setBranch) {
    await Activity0.setBranch(relatedBranch0);
  }

  const relatedBranch1 = await Branch.findOne({
    offset: Math.floor(Math.random() * (await Branch.count())),
  });
  const Activity1 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Activity1?.setBranch) {
    await Activity1.setBranch(relatedBranch1);
  }

  const relatedBranch2 = await Branch.findOne({
    offset: Math.floor(Math.random() * (await Branch.count())),
  });
  const Activity2 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Activity2?.setBranch) {
    await Activity2.setBranch(relatedBranch2);
  }

  const relatedBranch3 = await Branch.findOne({
    offset: Math.floor(Math.random() * (await Branch.count())),
  });
  const Activity3 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Activity3?.setBranch) {
    await Activity3.setBranch(relatedBranch3);
  }
}

async function associateBranchWithBranch() {
  const relatedBranch0 = await Branch.findOne({
    offset: Math.floor(Math.random() * (await Branch.count())),
  });
  const Branch0 = await Branches.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Branch0?.setBranch) {
    await Branch0.setBranch(relatedBranch0);
  }

  const relatedBranch1 = await Branch.findOne({
    offset: Math.floor(Math.random() * (await Branch.count())),
  });
  const Branch1 = await Branches.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Branch1?.setBranch) {
    await Branch1.setBranch(relatedBranch1);
  }

  const relatedBranch2 = await Branch.findOne({
    offset: Math.floor(Math.random() * (await Branch.count())),
  });
  const Branch2 = await Branches.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Branch2?.setBranch) {
    await Branch2.setBranch(relatedBranch2);
  }

  const relatedBranch3 = await Branch.findOne({
    offset: Math.floor(Math.random() * (await Branch.count())),
  });
  const Branch3 = await Branches.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Branch3?.setBranch) {
    await Branch3.setBranch(relatedBranch3);
  }
}

async function associateContactWithBranch() {
  const relatedBranch0 = await Branch.findOne({
    offset: Math.floor(Math.random() * (await Branch.count())),
  });
  const Contact0 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Contact0?.setBranch) {
    await Contact0.setBranch(relatedBranch0);
  }

  const relatedBranch1 = await Branch.findOne({
    offset: Math.floor(Math.random() * (await Branch.count())),
  });
  const Contact1 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Contact1?.setBranch) {
    await Contact1.setBranch(relatedBranch1);
  }

  const relatedBranch2 = await Branch.findOne({
    offset: Math.floor(Math.random() * (await Branch.count())),
  });
  const Contact2 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Contact2?.setBranch) {
    await Contact2.setBranch(relatedBranch2);
  }

  const relatedBranch3 = await Branch.findOne({
    offset: Math.floor(Math.random() * (await Branch.count())),
  });
  const Contact3 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Contact3?.setBranch) {
    await Contact3.setBranch(relatedBranch3);
  }
}

async function associateLeadWithOwner() {
  const relatedOwner0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead0 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Lead0?.setOwner) {
    await Lead0.setOwner(relatedOwner0);
  }

  const relatedOwner1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead1 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Lead1?.setOwner) {
    await Lead1.setOwner(relatedOwner1);
  }

  const relatedOwner2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead2 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Lead2?.setOwner) {
    await Lead2.setOwner(relatedOwner2);
  }

  const relatedOwner3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead3 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Lead3?.setOwner) {
    await Lead3.setOwner(relatedOwner3);
  }
}

// Similar logic for "relation_many"

async function associateLeadWithBranch() {
  const relatedBranch0 = await Branch.findOne({
    offset: Math.floor(Math.random() * (await Branch.count())),
  });
  const Lead0 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Lead0?.setBranch) {
    await Lead0.setBranch(relatedBranch0);
  }

  const relatedBranch1 = await Branch.findOne({
    offset: Math.floor(Math.random() * (await Branch.count())),
  });
  const Lead1 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Lead1?.setBranch) {
    await Lead1.setBranch(relatedBranch1);
  }

  const relatedBranch2 = await Branch.findOne({
    offset: Math.floor(Math.random() * (await Branch.count())),
  });
  const Lead2 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Lead2?.setBranch) {
    await Lead2.setBranch(relatedBranch2);
  }

  const relatedBranch3 = await Branch.findOne({
    offset: Math.floor(Math.random() * (await Branch.count())),
  });
  const Lead3 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Lead3?.setBranch) {
    await Lead3.setBranch(relatedBranch3);
  }
}

async function associateMetricWithBranch() {
  const relatedBranch0 = await Branches.findOne({
    offset: Math.floor(Math.random() * (await Branches.count())),
  });
  const Metric0 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Metric0?.setBranch) {
    await Metric0.setBranch(relatedBranch0);
  }

  const relatedBranch1 = await Branches.findOne({
    offset: Math.floor(Math.random() * (await Branches.count())),
  });
  const Metric1 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Metric1?.setBranch) {
    await Metric1.setBranch(relatedBranch1);
  }

  const relatedBranch2 = await Branches.findOne({
    offset: Math.floor(Math.random() * (await Branches.count())),
  });
  const Metric2 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Metric2?.setBranch) {
    await Metric2.setBranch(relatedBranch2);
  }

  const relatedBranch3 = await Branches.findOne({
    offset: Math.floor(Math.random() * (await Branches.count())),
  });
  const Metric3 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Metric3?.setBranch) {
    await Metric3.setBranch(relatedBranch3);
  }
}

async function associateNoteWithLead() {
  const relatedLead0 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note0 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Note0?.setLead) {
    await Note0.setLead(relatedLead0);
  }

  const relatedLead1 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note1 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Note1?.setLead) {
    await Note1.setLead(relatedLead1);
  }

  const relatedLead2 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note2 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Note2?.setLead) {
    await Note2.setLead(relatedLead2);
  }

  const relatedLead3 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note3 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Note3?.setLead) {
    await Note3.setLead(relatedLead3);
  }
}

async function associateNoteWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Note0 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Note0?.setUser) {
    await Note0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Note1 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Note1?.setUser) {
    await Note1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Note2 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Note2?.setUser) {
    await Note2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Note3 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Note3?.setUser) {
    await Note3.setUser(relatedUser3);
  }
}

async function associateNoteWithBranch() {
  const relatedBranch0 = await Branch.findOne({
    offset: Math.floor(Math.random() * (await Branch.count())),
  });
  const Note0 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Note0?.setBranch) {
    await Note0.setBranch(relatedBranch0);
  }

  const relatedBranch1 = await Branch.findOne({
    offset: Math.floor(Math.random() * (await Branch.count())),
  });
  const Note1 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Note1?.setBranch) {
    await Note1.setBranch(relatedBranch1);
  }

  const relatedBranch2 = await Branch.findOne({
    offset: Math.floor(Math.random() * (await Branch.count())),
  });
  const Note2 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Note2?.setBranch) {
    await Note2.setBranch(relatedBranch2);
  }

  const relatedBranch3 = await Branch.findOne({
    offset: Math.floor(Math.random() * (await Branch.count())),
  });
  const Note3 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Note3?.setBranch) {
    await Note3.setBranch(relatedBranch3);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Activities.bulkCreate(ActivitiesData);

    await Branches.bulkCreate(BranchesData);

    await Contacts.bulkCreate(ContactsData);

    await Leads.bulkCreate(LeadsData);

    await Metrics.bulkCreate(MetricsData);

    await Notes.bulkCreate(NotesData);

    await Branch.bulkCreate(BranchData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateUserWithBranch(),

      await associateActivityWithLead(),

      await associateActivityWithBranch(),

      await associateBranchWithBranch(),

      await associateContactWithBranch(),

      await associateLeadWithOwner(),

      // Similar logic for "relation_many"

      await associateLeadWithBranch(),

      await associateMetricWithBranch(),

      await associateNoteWithLead(),

      await associateNoteWithUser(),

      await associateNoteWithBranch(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('activities', null, {});

    await queryInterface.bulkDelete('branches', null, {});

    await queryInterface.bulkDelete('contacts', null, {});

    await queryInterface.bulkDelete('leads', null, {});

    await queryInterface.bulkDelete('metrics', null, {});

    await queryInterface.bulkDelete('notes', null, {});

    await queryInterface.bulkDelete('branch', null, {});
  },
};
