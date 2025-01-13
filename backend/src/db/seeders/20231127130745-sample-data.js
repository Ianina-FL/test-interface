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
    description: 'James Clerk Maxwell',

    start_time: new Date(),

    end_time: new Date(),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'Alfred Kinsey',

    start_time: new Date(),

    end_time: new Date(),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'William Bayliss',

    start_time: new Date(),

    end_time: new Date(),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'Isaac Newton',

    start_time: new Date(),

    end_time: new Date(),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const BranchesData = [
  {
    name: 'Alfred Wegener',

    address: 'Alfred Wegener',

    phone_number: 'Justus Liebig',

    // type code here for "relation_one" field
  },

  {
    name: 'Joseph J. Thomson',

    address: 'Galileo Galilei',

    phone_number: 'Francis Galton',

    // type code here for "relation_one" field
  },

  {
    name: 'James Clerk Maxwell',

    address: 'Hans Selye',

    phone_number: 'Marie Curie',

    // type code here for "relation_one" field
  },

  {
    name: 'Franz Boas',

    address: 'Lucretius',

    phone_number: 'Erwin Schrodinger',

    // type code here for "relation_one" field
  },
];

const ContactsData = [
  {
    first_name: 'Archimedes',

    last_name: 'William Herschel',

    email: 'Jean Piaget',

    phone_number: 'Rudolf Virchow',

    // type code here for "relation_one" field
  },

  {
    first_name: 'Paul Dirac',

    last_name: 'Max von Laue',

    email: 'B. F. Skinner',

    phone_number: 'Hermann von Helmholtz',

    // type code here for "relation_one" field
  },

  {
    first_name: 'Antoine Laurent Lavoisier',

    last_name: 'Nicolaus Copernicus',

    email: 'James Clerk Maxwell',

    phone_number: 'Marie Curie',

    // type code here for "relation_one" field
  },

  {
    first_name: 'Ernest Rutherford',

    last_name: 'Paul Ehrlich',

    email: 'Rudolf Virchow',

    phone_number: 'Sigmund Freud',

    // type code here for "relation_one" field
  },
];

const LeadsData = [
  {
    name: 'Comte de Buffon',

    status: 'won',

    category: 'corporate',

    // type code here for "relation_one" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    name: 'Nicolaus Copernicus',

    status: 'qualified',

    category: 'corporate',

    // type code here for "relation_one" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    name: 'Lynn Margulis',

    status: 'contacted',

    category: 'individual',

    // type code here for "relation_one" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    name: 'Linus Pauling',

    status: 'new',

    category: 'corporate',

    // type code here for "relation_one" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },
];

const MetricsData = [
  {
    name: 'Thomas Hunt Morgan',

    value: 66.02,

    // type code here for "relation_one" field
  },

  {
    name: 'Murray Gell-Mann',

    value: 44.83,

    // type code here for "relation_one" field
  },

  {
    name: 'Andreas Vesalius',

    value: 68.86,

    // type code here for "relation_one" field
  },

  {
    name: 'William Bayliss',

    value: 95.05,

    // type code here for "relation_one" field
  },
];

const NotesData = [
  {
    content: 'Heike Kamerlingh Onnes',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Hans Bethe',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Frederick Gowland Hopkins',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Ernst Haeckel',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const BranchData = [
  {
    name: 'Max Born',
  },

  {
    name: 'Gustav Kirchhoff',
  },

  {
    name: 'Marcello Malpighi',
  },

  {
    name: 'Ernest Rutherford',
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
