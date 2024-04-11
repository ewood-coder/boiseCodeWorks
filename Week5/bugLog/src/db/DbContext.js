import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { TrackedBugSchema } from '../models/TrackedBug.js';
import { BugSchema } from '../models/Bug.js';
import { NoteSchema } from '../models/Note.js';

class DbContext {
	Values = mongoose.model('Value', ValueSchema);
	Account = mongoose.model('Account', AccountSchema);
	TrackedBugs = mongoose.model('TrackedBug', TrackedBugSchema)
	Bugs = mongoose.model('Bug', BugSchema)
	Notes = mongoose.model('Note', NoteSchema)
}

export const dbContext = new DbContext()
